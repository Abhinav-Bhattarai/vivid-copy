import { PUBLIC_DEFAULT_SERVER_URL } from '$env/static/public';
import { apiBase } from '$ts/constants/main';
import type { TGenerationRequest, TGenerationResponse } from '$ts/types/main';

export async function generateImage({
	server_url,
	prompt,
	negative_prompt,
	model_id,
	scheduler_id,
	width,
	height,
	seed,
	num_inference_steps,
	guidance_scale,
	should_submit_to_gallery = false,
	init_image,
	prompt_strength,
	mask,
	output_image_ext = 'png',
	access_token,
	app_version
}: TGenerationRequest) {
	console.log({
		server_url,
		prompt,
		negative_prompt,
		model_id,
		scheduler_id,
		width,
		height,
		num_inference_steps,
		guidance_scale,
		seed,
		output_image_ext,
		init_image,
		mask,
		prompt_strength,
		should_submit_to_gallery,
		access_token
	});
	const response = await fetch(PUBLIC_DEFAULT_SERVER_URL + `/api/generate`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-App-Version': app_version
		},
		body: JSON.stringify({
			record: {
				server_url,
				prompt,
				negative_prompt,
				model_id,
				scheduler_id,
				width,
				height,
				num_inference_steps,
				guidance_scale,
				seed,
				output_image_ext,
				init_image,
				mask,
				prompt_strength,
				should_submit_to_gallery,
				access_token
			}
		})
	});
	const resJSON: TGenerationResponse = await response.json();
	return resJSON;
}

export async function generateImageV2({
	server_url,
	prompt,
	negative_prompt,
	model_id,
	scheduler_id,
	width,
	height,
	seed,
	num_inference_steps,
	guidance_scale,
	should_submit_to_gallery = false,
	init_image,
	prompt_strength,
	mask,
	output_image_ext = 'jpg',
	access_token,
	app_version
}: TGenerationRequest) {
	const response = await fetch(`${apiBase}/v2/generate`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-App-Version': app_version
		},
		body: JSON.stringify({
			server_url,
			prompt,
			negative_prompt,
			model_id,
			scheduler_id,
			width,
			height,
			num_inference_steps,
			guidance_scale,
			seed,
			output_image_ext,
			init_image,
			mask,
			prompt_strength,
			should_submit_to_gallery,
			access_token
		})
	});
	const resJSON: TGenerationResponse = await response.json();
	return resJSON;
}
