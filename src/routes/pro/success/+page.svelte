<script>
	import Button from '$components/buttons/Button.svelte';
	import IconConfetti from '$components/icons/IconConfetti.svelte';
	import LL from '$i18n/i18n-svelte';
	import { onMount } from 'svelte';
	import MetaTag from '$components/MetaTag.svelte';
	import { canonicalUrl } from '$ts/constants/main';
	import { page } from '$app/stores';
	import ConfettiFullScreen from '$components/ConfettiFullScreen.svelte';
	import PageWrapper from '$components/PageWrapper.svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<MetaTag
	title="Succeeded | VividGen"
	description="Become a pro member on VividGen to unlock all of its features."
	imageUrl="{canonicalUrl}/previews{$page.url.pathname}.png"
	canonical="{canonicalUrl}{$page.url.pathname}"
/>

<PageWrapper>
	<div class="w-full flex flex-col items-center justify-start my-auto">
		<IconConfetti class="w-24 h-24 text-c-primary" />
		<h1 class="text-center font-bold text-4xl mt-4 text-c-primary">
			{$LL.Pro.Success.PageTitle()}
		</h1>
		<p class="max-w-2xl mt-4 text-center leading-relaxed text-c-on-bg/75">
			{@html $LL.Pro.Success.PageParagraph({ platform: '__discord__' }).replace(
				'__discord__',
				`<a class="text-c-primary font-bold hover:underline" href="/discord" target="_blank">Discord</a>`
			)}
		</p>
		<Button href="/" withSpinner class="mt-6">{$LL.Shared.StartGeneratingButton()}</Button>
	</div>
</PageWrapper>

{#if mounted}
	<ConfettiFullScreen />
{/if}
