import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$i18n/i18n-util.async';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { IUserPlan } from '$ts/types/stripe';
import { writable } from 'svelte/store';
import type { TAvailableThemes } from '$ts/stores/theme';
import { browser } from '$app/environment';
import { PUBLIC_DEFAULT_SERVER_URL } from '$env/static/public';

export const load: LayoutLoad = async (event) => {
	let plan: IUserPlan = 'ANONYMOUS';
	let credits = 0;
	let { supabaseClient, session } = await getSupabase(event);
	if (session?.user.id) {
		try {
			const { data } = await supabaseClient
				.from('user')
				.select('subscription_tier, credits')
				.eq('id', session.user.id)
				.maybeSingle();
			if (data) credits = data.credits;
			if (data && data.subscription_tier) {
				plan = data.subscription_tier;
				if (plan === 'FREE') {
					const stripe_config = { record: { email: session.user.email, id: session.user.id } };
					const stripe_data = await fetch(PUBLIC_DEFAULT_SERVER_URL + '/api/stripe/create-customer', {
						method: 'POST',
						body: JSON.stringify(stripe_config)
					});
				}
			} else {
				let { data } = await supabaseClient.auth.refreshSession(session);
				if (data && data.session) {
					session = data.session;
					const { data: userData } = await supabaseClient
						.from('user')
						.select('subscription_tier, credits')
						.eq('id', session.user.id)
						.maybeSingle();
					if (userData) credits = userData.credits;
					if (userData && userData.subscription_tier) {
						plan = userData.subscription_tier;
						if (plan === 'FREE') {
							const stripe_config = { record: { email: session.user.email, id: session.user.id } };
							const stripe_data = await fetch(PUBLIC_DEFAULT_SERVER_URL + '/api/stripe/create-customer', {
								method: 'POST',
								body: JSON.stringify(stripe_config)
							});
						}
					} else throw Error('No user found');
				} else throw Error('No session found');
			}
		} catch (error) {
			session = null;
			console.error(error);
		}
	}
	else {
		if (browser) {
			let creds = localStorage.getItem("dobber_id");
			if (!creds) {
				localStorage.setItem("dobber_id", "5");
				creds = "5";
				credits = parseInt(creds);
			} else {
				credits = parseInt(creds);
			}
		}
	}
	const locale = event.data.locale;
	await loadLocaleAsync(locale);
	const theme = event.data.theme;
	const advancedMode = event.data.advancedMode;
	return {
		locale,
		session,
		plan,
		credits,
		theme,
		advancedMode,
		advancedModeStore: writable(false),
		themeStore: writable<TAvailableThemes>('dark')
	};
};
