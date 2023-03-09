import { availableHeights, availableInferenceSteps, availableWidths } from '$ts/constants/main';
import { supabaseAdmin } from '$ts/constants/supabaseAdmin';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { RequestHandler } from '@sveltejs/kit';
import { SAGE_MAKER_URL } from '$ts/constants/sagemaker';

export const POST: RequestHandler = async (event) => {
	const body: IBody = await event.request.json();
	const record = body.record;
	const bucket_id = 'bucket_id ---> here';
	console.log(record, 'record');
	const { session } = await getSupabase(event);

	let plan = 'ANONYMOUS';
	let credits = 0;

	if (body.record.prompt.length < 3) {
		return new Response(JSON.stringify({ error: 'prompt length is less than 3' }));
	}

	if (parseInt(record.seed) > 1000000000) {
		return new Response(JSON.stringify({ error: 'seeding limit reached' }));
	}

	if (availableWidths.includes(record.width) === false) {
		return new Response(JSON.stringify({ error: 'width out of range' }));
	}

	if (availableHeights.includes(record.height) === false) {
		return new Response(JSON.stringify({ error: 'height out of range' }));
	}

	if (parseInt(record.guidance_scale) < 1 || parseInt(record.guidance_scale) > 20) {
		return new Response(JSON.stringify({ error: 'guidance_scale out of range' }));
	}

	if (availableInferenceSteps.includes(record.num_inference_steps) === false) {
		return new Response(JSON.stringify({ error: 'num_inference_steps out of range' }));
	}

	if (!record.email) {
		return new Response(JSON.stringify({ error: 'No email provided' }));
	}
	if (!record.id) {
		return new Response(JSON.stringify({ error: 'No ID provided' }));
	}

	if (!session) {
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

	if (!data.email || data.email !== record.email) {
		return new Response(JSON.stringify({ error: 'Emails do not match' }));
	}
	let time_taken = 0;
	let status = 'succeeded';
	credits = data.credits;
	plan = data.subscription_tier;
	const modelID = '115756cd-52dd-4208-b06a-c151dda5b8b5';

	if (credits >= 2) {
		const config = {
			seed: record.seed,
			prompt: record.prompt,
			width: record.width,
			height: record.height,
			guidance_scale: record.guidance_scale,
			num_inference_steps: record.num_inference_steps
		};
		const sagemaker_response = await fetch(SAGE_MAKER_URL, {
			method: 'POST',
			body: JSON.stringify(config)
		});
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
		const sagemaker_data: { b64: string } = await sagemaker_response.json();
		if (record.should_submit_to_gallery) {
			// add to supabase bucket
			// const buffer = ;
			// convert base64 to buffer <0, 01>;
			const dummy_buffer = sagemaker_data.b64;
			const fileName =
				Math.floor(Math.random() * 1000000).toString() + '_vividgen_' + record.seed.toString();
			const storage = await supabaseAdmin.storage
				.from(bucket_id)
				.update(`/gallery/${fileName}`, dummy_buffer);
			if (storage.error) return new Response(JSON.stringify({ error: 'Server Error' }));

			if (!storage.error) {
				return new Response(
					JSON.stringify({ data: { image_b64: sagemaker_data.b64 }, error: false })
				);
			}
		}
		return new Response(JSON.stringify({ data: { image_b64: sagemaker_data.b64 }, error: false }));
	}

	return new Response(JSON.stringify({ error: 'Server Error' }));
};

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
