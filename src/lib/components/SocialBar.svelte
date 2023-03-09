<script lang="ts">
	import { socialAppUrls } from '$ts/constants/social';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import IconButton from './buttons/IconButton.svelte';
	import IconSocial from './icons/IconSocial.svelte';

	export let size: 'sm' | 'md' = 'sm';
	export let color: 'faded' | 'normal' = 'faded';
	export let withEmail = false;
	export let isInline = false;
</script>

<div class="{!isInline ? 'w-full' : ''} flex flex-wrap justify-center">
	<IconButton name="Discord" href={socialAppUrls.discord} target="_blank">
		<IconSocial
			type="discord"
			class="{size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'} transition {color === 'normal'
				? 'text-c-on-bg'
				: 'text-c-on-bg/50'} {!$isTouchscreen ? 'group-hover:text-c-primary' : ''}"
		/>
	</IconButton>
	<IconButton name="Twitter" href={socialAppUrls.twitter} target="_blank">
		<IconSocial
			type="twitter"
			class="{size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'} transition {color === 'normal'
				? 'text-c-on-bg'
				: 'text-c-on-bg/50'} {!$isTouchscreen ? 'group-hover:text-c-primary' : ''}"
		/>
	</IconButton>
	{#if withEmail}
		<IconButton name="Email" href={socialAppUrls.email} target="_blank">
			<IconSocial
				type="email"
				class="{size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'} transition {color === 'normal'
					? 'text-c-on-bg'
					: 'text-c-on-bg/50'} {!$isTouchscreen ? 'group-hover:text-c-primary' : ''}"
			/>
		</IconButton>
	{/if}
</div>
