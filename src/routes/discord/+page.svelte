<script lang="ts">
	import RedirectPage from '$components/RedirectPage.svelte';
	import LL from '$i18n/i18n-svelte';
	import { socialUrls } from '$ts/constants/social';
</script>

<RedirectPage
	url={socialUrls.discord}
	redirectingText={$LL.Redirect.RedirectingToTitle({ name: 'Discord' })}
	title="Discord | VividGen"
	description="Join our Discord server to get updates on VividGen, share your generations, and more!"
/>
