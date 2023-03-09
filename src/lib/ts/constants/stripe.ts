import {
	STRIPE_PRO_PRICE_ID,
	STRIPE_PRO_PRICE_ID_EUR,
	STRIPE_SECRET_KEY,
	STRIPE_CREDIT_150_ID,
	STRIPE_CREDIT_350_ID,
	STRIPE_CREDIT_750_ID,
	STRIPE_CREDIT_2000_ID
} from '$env/static/private';
import Stripe from 'stripe';

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15'
});

export const stripeTiers = [
	{
		name: 'Pro',
		priceId: {
			USD: STRIPE_PRO_PRICE_ID,
			EUR: STRIPE_PRO_PRICE_ID_EUR
		}
	}
] as const;

export const stripeCredits = [
	{
		id: 0,
		name: "Credit-150",
		priceId: STRIPE_CREDIT_150_ID
	},
	{
		id: 1,
		name: "Credit-350",
		priceId: STRIPE_CREDIT_350_ID
	},
	{
		id: 2,
		name: "Credit-750",
		priceId: STRIPE_CREDIT_750_ID
	},
	{
		id: 3,
		name: "Credit-2000",
		priceId: STRIPE_CREDIT_2000_ID
	}
]

export const defaultStripeTier = stripeTiers[0];