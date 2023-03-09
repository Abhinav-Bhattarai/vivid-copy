import { stripe, stripeCredits } from '$ts/constants/stripe';
import { supabaseAdmin } from '$ts/constants/supabaseAdmin';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	const { session } = await getSupabase(event);
	if (!session?.user.id) {
		return new Response(JSON.stringify({ error: 'No user ID' }));
	}
	const url = event.url;
	const defaultCreditID = stripeCredits[0];
	const baseUrl = `${url.protocol}//${url.host}`;
	const tierParam = event.url.searchParams.get('product_id');
	let tier = defaultCreditID;
	if (tierParam) {
		tier = stripeCredits.filter((item) => item.id === parseInt(tierParam))[0];
	}
	const { data: userData, error: userError } = await supabaseAdmin
		.from('user')
		.select('stripe_customer_id')
		.eq('id', session.user.id)
		.maybeSingle();
	if (userError || !userData) {
		return new Response(JSON.stringify({ error: userError || 'No user found' }));
	}
	const customer = await stripe.customers.retrieve(userData.stripe_customer_id);
	console.log(tier.priceId);
	const checkoutSession = await stripe.checkout.sessions.create({
		customer: customer.id,
		currency: 'usd',
		line_items: [
			{
				price: tier.priceId,
				quantity: 1
			}
		],
		mode: "payment",
		success_url: `${baseUrl}/credit-recharge/success`,
		cancel_url: `${baseUrl}/credit-recharge/cancel`
	});
	return new Response(
		JSON.stringify({
			data: {
				checkoutSession
			}
		})
	);
};
