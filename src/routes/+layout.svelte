<script>
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { animate } from 'motion';
	import 'iconify-icon';
	import { locales, locale } from '$lib/translations';

	onMount(() => {
		const header = document.querySelector('.headerBar');

		animate(header, { opacity: [0, 1], y: [0, 5, 0] }, { duration: 1 });
	});

	const handleAnchorClick = (event) => {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		anchor.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			background="bg-transparent headerBar"
			padding="pt-4"
			class="container flex justify-start mx-auto"
		>
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-xl uppercase"> Jawad A. </strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="#work" on:click={handleAnchorClick} class="p-2 badge variant-filled">Work</a>
				<a href="#about" on:click={handleAnchorClick} class="p-2 badge variant-filled">About</a>
				<a href="#contact" on:click={handleAnchorClick} class="p-2 badge variant-filled">Contact</a>
				<LightSwitch />
				{#if $locale === 'en'}
					<button class="badge-icon variant-filled-primary" on:click={() => $locale = 'de'}>
						<iconify-icon icon="emojione:flag-for-germany" />
					</button>
				{:else}
					<button class="badge-icon variant-filled-primary" on:click={() => $locale = 'en'}>
						<iconify-icon icon="emojione:flag-for-united-kingdom" />
					</button>
				{/if}
				<p>{$locale}</p>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
