<script lang="ts">
	import SocialBar from '$components/SocialBar.svelte';
</script>

<div class="w-full flex flex-wrap justify-center items-center px-6 py-5 gap-1.5 md:gap-2.5">
	<div class="w-full md:w-auto flex justify-center items-center">
		<p
			class="text-center leading-relaxed text-xs text-c-on-bg/50 
			font-semibold py-1 -mt-1 md:my-auto rounded-lg space-x-1 underline cursor-pointer"
		>
		<a href="/TOS">Terms of services</a>
		</p>
	</div>
	<SocialBar isInline withEmail />
	<div class="w-full md:w-auto flex justify-center items-center">
		<p
			class="text-center leading-relaxed text-xs text-c-on-bg/50 
			font-semibold py-1 -mt-1 md:my-auto rounded-lg underline cursor-pointer"
		>
			<a href="/privacy-policy">Privacy policy</a>
		</p>
	</div>
</div>
