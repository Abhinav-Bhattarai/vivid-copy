<script lang="ts">
	import { page } from '$app/stores';
	import MetaTag from '$components/MetaTag.svelte';
	import LL from '$i18n/i18n-svelte';
	import { canonicalUrl } from '$ts/constants/main';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const posts = data.posts;
</script>

<MetaTag
	title="Blog | VividGen"
	description="Articles about Stable Diffusion tips and tricks, Stable Diffusion experiments, other AI related topics and the latest Stablecog news."
	imageUrl="{canonicalUrl}/previews{$page.url.pathname}.png"
	canonical="{canonicalUrl}{$page.url.pathname}"
/>

<div
	class="w-full flex flex-col items-center flex-1 justify-center px-4 pt-2 
		md:pt-8 pb-[calc(3vh+0.5rem)]"
>
	<div class="w-full max-w-7xl flex justify-center text-center">
		<h1 class="font-bold text-4xl">{$LL.Blog.Title()}</h1>
	</div>
	<div class="w-full max-w-7xl md:px-8 flex flex-wrap gap-5 items-start justify-center mt-8">
		{#each posts as post}
			<a
				href="/blog/{post.slug}"
				data-sveltekit-prefetch
				class="w-full max-w-md md:max-w-sm bg-c-bg-secondary ring-2 ring-c-bg-tertiary relative z-0 overflow-hidden
				rounded-xl flex flex-col shadow-lg shadow-c-shadow/[var(--o-shadow-normal)] transition group
				{!$isTouchscreen
					? 'hover:ring-4 hover:shadow-xl hover:shadow-c-shadow/[var(--o-shadow-strong)] hover:-translate-y-1.5'
					: ''}"
			>
				<div class="w-full h-auto relative z-0 overflow-hidden">
					<svg class="w-full h-auto relative" viewBox="0 0 1200 630" />
			
				</div>
				<div class="w-full flex flex-col px-5 pt-3 pb-4 relative">
					<p
						class="font-bold text-lg leading-snug text-c-on-bg transition {!$isTouchscreen
							? 'group-hover:text-c-primary'
							: ''}"
					>
						{post.title}
					</p>
					<p class="text-xs text-c-on-bg/50 mt-2 leading-normal">{post.description}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
