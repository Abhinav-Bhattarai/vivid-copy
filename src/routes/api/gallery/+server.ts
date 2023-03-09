import { supabaseAdmin } from '$ts/constants/supabaseAdmin';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
	const { session } = await getSupabase(event);
	if (session) {
		const userID = session.user.id;
		const downloads = await supabaseAdmin.storage.from("public").download("/gallery");
		if (downloads.error) return new Response(JSON.stringify({ error: 'Server Error' }));
		const download_file = downloads.data;
		// return Response({})

	}
	return new Response(JSON.stringify({ error: 'Server Error' }));
};
