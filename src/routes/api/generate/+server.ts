import { availableHeights, availableInferenceSteps, availableWidths } from '$ts/constants/main';
import { supabaseAdmin } from '$ts/constants/supabaseAdmin';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { RequestHandler } from '@sveltejs/kit';
import { decode } from 'base64-arraybuffer';
import { R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, SAGEMAKER_ENDPOINT } from '$env/static/private';
import AWS from "@aws-sdk/client-sagemaker-runtime";
const client = new AWS.SageMakerRuntime({region: "us-east-2"});

export const POST: RequestHandler = async (event) => {
	const body: IBody = await event.request.json();
	console.log(body, 'body');
	const record = body.record;
	const { session } = await getSupabase(event);
	let plan = 'ANONYMOUS';
	let credits = 2;

	if (body.record.prompt.length < 3) {
		return new Response(JSON.stringify({ error: 'prompt length is less than 3' }));
	}

	if (parseInt(record.seed) > 1000000000000) {
		return new Response(JSON.stringify({ error: 'seeding limit reached' }));
	}

	if (availableWidths.includes(record.width.toString()) === false) {
		return new Response(JSON.stringify({ error: 'width out of range' }));
	}

	if (availableHeights.includes(record.height.toString()) === false) {
		return new Response(JSON.stringify({ error: 'height out of range' }));
	}

	if (parseInt(record.guidance_scale) < 1 || parseInt(record.guidance_scale) > 20) {
		return new Response(JSON.stringify({ error: 'guidance_scale out of range' }));
	}

	if (availableInferenceSteps.includes(record.num_inference_steps.toString()) === false) {
		return new Response(JSON.stringify({ error: 'num_inference_steps out of range' }));
	}

	if (!session) {
		if (credits >= 2) {
			const config = {
				inputs: record.prompt,
				width: record.width,
				height: record.height,
				guidance_scale: record.guidance_scale,
				num_inference_steps: record.num_inference_steps,
				XToken: "zGI?BPUXhgWe*4Ec??yUT4^h@peYlkXy"
			};
			const sagemaker_response = await fetch(SAGEMAKER_ENDPOINT, {
				method: 'POST',
				body: JSON.stringify(config),
				headers: {
					"x-api-key": "EtaXSQ4Dl05Ap4ejB5NtS50fQHinQOtr3Ksg0QPR"
				}
			});
			let json_sagemaker_data: string = await sagemaker_response.json();
			console.log(json_sagemaker_data, "json_sagemaker_data")
			const sagemaker_data: { prediction: {generated_images: Array<string>} } = JSON.parse(json_sagemaker_data);
			return new Response(JSON.stringify({ data: { image_b64: "data:image/png;base64," + sagemaker_data.prediction.generated_images[0] }, error: false }));
		}
		return new Response(JSON.stringify({ error: 'Session not found' }));
	}

	const { data, error } = await supabaseAdmin
		.from('user')
		.select('id,email,stripe_customer_id,credits,subscription_tier')
		.eq('id', session.user.id)
		.maybeSingle();
	if (error) {
		return new Response(JSON.stringify({ error }));
	}
	if (!data || !data.id) {
		return new Response(JSON.stringify({ error: 'No user found' }));
	}

	if (!data.email || data.email !== session.user.email) {
		return new Response(JSON.stringify({ error: 'Emails do not match' }));
	}
	let time_taken = 0;
	let status = 'succeeded';
	credits = data.credits;
	plan = data.subscription_tier;
	const modelID = '115756cd-52dd-4208-b06a-c151dda5b8b5';
	console.log("modelID", modelID);
	console.log(credits, "credits");
	if (credits >= 2) {
		const config = {
			inputs: record.prompt,
			width: record.width,
			height: record.height,
			guidance_scale: record.guidance_scale,
			num_inference_steps: record.num_inference_steps,
			XToken: "zGI?BPUXhgWe*4Ec??yUT4^h@peYlkXy"
		};
		const sagemaker_response = await fetch(SAGEMAKER_ENDPOINT, {
			method: 'POST',
			body: JSON.stringify(config),
			headers: {
				"x-api-key": "EtaXSQ4Dl05Ap4ejB5NtS50fQHinQOtr3Ksg0QPR"
			}
		});
		let json_sagemaker_data: string = await sagemaker_response.json();
		console.log(json_sagemaker_data, "json_sagemaker_data")
		const sagemaker_data: { prediction: {generated_images: Array<string>} } = JSON.parse(json_sagemaker_data);
		credits -= 2;
		await supabaseAdmin.from('user').update({ credits }).eq('id', session.user.id);
		let negative_prompt_data = null;
		if (record.negative_prompt) {
			if (record.negative_prompt.length > 0) {
				negative_prompt_data = await supabaseAdmin
					.from('negative_prompt')
					.insert({ text: record.negative_prompt })
					.select();
			}
		}
		const promptData = await supabaseAdmin.from('prompt').insert({ text: record.prompt }).select();
		let generationInsert = {
			model_id: modelID,
			width: parseInt(record.width),
			height: parseInt(record.height),
			seed: parseInt(record.seed),
			num_inference_steps: parseInt(record.num_inference_steps),
			duration_ms: time_taken,
			status: status,
			user_id: session.user.id,
			user_tier: plan,
			prompt_id: 'NULL',
			negative_prompt_id: 'NULL'
		};
		if (promptData.data) {
			generationInsert = { ...generationInsert, prompt_id: promptData.data[0].id };
		}

		if (negative_prompt_data) {
			if (negative_prompt_data.data)
				generationInsert = {
					...generationInsert,
					negative_prompt_id: negative_prompt_data.data[0].id
				};
		}
		await supabaseAdmin.from('generation').insert(generationInsert);
		if (record.should_submit_to_gallery) {
			const dummy_buffer = sagemaker_data.prediction.generated_images[0];
			const fileName =
				Math.floor(Math.random() * 1000000).toString() + '_vividgen_' + record.seed.toString();
			// const storage = await supabaseAdmin.storage
			// 	.from(bucket_id)
			// 	.update(`/gallery/${fileName}`, dummy_buffer);
			const storage = await supabaseAdmin.storage
				.from('public')
				.upload(`all/${fileName}.png`, decode(dummy_buffer), {
					contentType: 'image/png'
				});
			if (storage.error) return new Response(JSON.stringify({ error: 'Server Error' }));

			if (!storage.error) {
				return new Response(
					JSON.stringify({ data: { image_b64: "data:image/png;base64," + sagemaker_data.prediction.generated_images[0] }, error: false })
				);
			}
		}
		console.log(sagemaker_data.prediction, "image");
		return new Response(JSON.stringify({ data: { image_b64: "data:image/png;base64," + sagemaker_data.prediction.generated_images[0] }, error: false }));
	}

	return new Response(JSON.stringify({ error: 'Not enough creds' }));
};

// glpat-JSdtRazccGxhiHy533-b
interface IBody {
	record: {
		id: string;
		email: string;
		server_url: string;
		prompt: string;
		negative_prompt: string;
		model_id: string;
		scheduler_id: string;
		width: string;
		height: string;
		num_inference_steps: string;
		guidance_scale: string;
		seed: string;
		output_image_ext: string;
		init_image: string;
		mask: string;
		prompt_strength: string;
		should_submit_to_gallery: boolean;
		access_token: string;
	};
}
