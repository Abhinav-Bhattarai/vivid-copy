<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import MetaTag from '$components/MetaTag.svelte';
	import PageWrapper from '$components/PageWrapper.svelte';
	import SignInCard from '$components/SignInCard.svelte';
	import { canonicalUrl } from '$ts/constants/main';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: $page.data.session?.user.id, redirect();

	async function redirect() {
		if (!browser) return;
		if (!$page.data.session?.user.id) return;
		await goto('/');
	}
</script>

<MetaTag
	title="Sign In | VividGen"
	description="Sign in to VividGen and use it with all features that are available to your account."
	imageUrl="{canonicalUrl}/previews{$page.url.pathname}.png"
	canonical="{canonicalUrl}{$page.url.pathname}"
/>

<PageWrapper>
	<div class="w-full flex justify-center items-center my-auto">
		<SignInCard redirectTo={data.redirect_to} />
	</div>
</PageWrapper>
