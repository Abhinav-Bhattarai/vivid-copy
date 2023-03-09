<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import MetaTag from '$components/MetaTag.svelte';
	import { canonicalUrl } from '$ts/constants/main';
	import type Stripe from 'stripe';
	import { onMount } from 'svelte';
	import PageWrapper from '$components/PageWrapper.svelte';
	import { fade, fly } from 'svelte/transition';
	import { portal } from 'svelte-portal';
	import { clickoutside } from '$ts/actions/clickoutside';
	import SignInCard from '$components/SignInCard.svelte';
	import { quadOut } from 'svelte/easing';
	import Button from '$components/buttons/Button.svelte';

	let checkoutCreationStatus: 'idle' | 'loading' | 'success' | 'error' = 'idle';
	let isSignInModalOpen = false;
	let CredData = [
		{ id: 0, quantity: 150, price: '9.99', status: true },
		{ id: 1, quantity: 350, price: '44.99', status: false },
		{ id: 2, quantity: 750, price: '84.99', status: false },
		{ id: 3, quantity: 2000, price: '179.99', status: false }
	];
	const ChangeStatus = (id: number) => {
		console.log(id);
		const dummy = [...CredData];
		for (let data of dummy) {
			data.status = false;
			if (data.id === id) {
				data.status = true;
			}
		}
		CredData = dummy;
	};
	$: credits = CredData;
	async function createCheckoutSessionAndRedirect() {
		try {
			const checkoutItem = CredData.filter((item) => item.status === true);
			checkoutCreationStatus = 'loading';
			const res = await fetch(`/api/stripe/buy-credit-session?product_id=${checkoutItem[0].id}`);
			const resJson: ICheckoutSessionRes = await res.json();
			if (resJson.error) {
				throw new Error(resJson.error);
			}
			const checkoutSession = resJson.data.checkoutSession;
			if (!checkoutSession.url) {
				throw new Error('No checkout session url returned');
			}
			checkoutCreationStatus = 'success';
			await goto(checkoutSession.url);
		} catch (error) {
			checkoutCreationStatus = 'error';
			console.log(error);
		}
	}

	interface ICheckoutSessionRes {
		data: {
			checkoutSession: Stripe.Response<Stripe.Checkout.Session>;
		};
		error: string;
	}

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<MetaTag
	title="Pro | VividGen"
	description="Become a pro member on VividGen to unlock all of its features."
	imageUrl="{canonicalUrl}/previews{$page.url.pathname}.png"
	canonical="{canonicalUrl}{$page.url.pathname}"
/>

<PageWrapper>
	<div class="w-full flex flex-col items-center justify-start my-auto">
		<div
			class="mt-8 max-w-[52rem] w-[90%] xl:w-[60%] lg:w-[70%] md:w-[80%] bg-c-bg shadow-xl shadow-c-shadow/[var(--o-shadow-strong)] 
				p-4 md:p-6 rounded-2xl md:rounded-3xl ring-2 ring-c-bg-secondary"
		>
			<h2
				class="font-bold text-3xl md:-mt-2 flex justify-center items-center gap-2 text-center py-8"
			>
				Recharge
			</h2>
			<h5 class="md:-mt-2 flex justify-center items-center gap-2 text-center mt-2 mb-10">
				Save your favorite images, GIFs & videos and upload them to Swap!
			</h5>
			{#each credits as cred}
				<div
					on:click={() => ChangeStatus(cred.id)}
					class={`bg-c-bg shadow-xl shadow-c-shadow/[var(--o-shadow-strong)] 
			p-4 md:p-4 mx-auto w-[60%] rounded-xl md:rounded-xl ring-2 cursor-pointer ring-c-bg-secondary my-4 flex flex-row justify-between hover:bg-c-bg-secondary transition ${
				cred.status === true && 'ring-c-primary'
			}`}
				>
					<div>{cred.quantity} Credits</div>
					<div>${cred.price}</div>
				</div>
			{/each}

			{#if $page.data.session?.user.email}
				<Button
					withSpinner
					loading={checkoutCreationStatus === 'loading'}
					onClick={createCheckoutSessionAndRedirect}
					class="w-[60%] mx-auto mt-12">Secure Checkout</Button>
				>
			{:else}
				<Button onClick={() => (isSignInModalOpen = true)} class="w-[60%] mx-auto mt-12"
					>Signup</Button
				>
			{/if}

			{#if isSignInModalOpen && !$page.data.session?.user.id}
				<div
					use:portal={'body'}
					transition:fade|local={{ duration: 300, easing: quadOut }}
					class="w-full h-full bg-c-barrier/80 fixed left-0 top-0 px-3 z-[10000]"
				/>
				<div
					use:portal={'body'}
					transition:fly|local={{ duration: 200, y: 50, easing: quadOut }}
					class="w-full h-full flex flex-col items-center fixed left-0 top-0 px-3 py-20 z-[10001] overflow-auto"
				>
					<div
						use:clickoutside={{ callback: () => (isSignInModalOpen = false) }}
						class="w-full max-w-2xl flex justify-center my-auto"
					>
						<SignInCard isModal={true} redirectTo={$page.url.pathname} />
					</div>
				</div>
			{/if}
		</div>
	</div>
</PageWrapper>
