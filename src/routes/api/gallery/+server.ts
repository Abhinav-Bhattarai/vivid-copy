import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { supabaseAdmin } from '$ts/constants/supabaseAdmin';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
	// const session = true;
	const downloads = await supabaseAdmin.storage.from('public').list('all/', {
		limit: 20,
		offset: 0
	});
	console.log(downloads);
	if (downloads.error) return new Response(JSON.stringify({ error: 'Server Error' }));
	const CDN_URLS = downloads.data.map((item) => {
		return `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/public/all/${item.name}`;
	});
	console.log(CDN_URLS);
	const download_file = downloads.data;
	console.log(download_file);
	return new Response(JSON.stringify({ images: CDN_URLS }));
};
