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
	import { t, locale } from '$lib/translations';

	onMount(() => {
		const header = document.querySelector('.headerBar');

		animate(header, { opacity: [0, 1], y: [0, 5, 0] }, { duration: 1 });

		const storedLocale = sessionStorage.getItem('locale') || 'en';

		$locale = storedLocale;

		const circle = document.querySelector('.circle');
		document.addEventListener('mousemove', (e) => {
			const height = circle.offsetHeight;
			const width = circle.offsetWidth;

			if (e.target.classList.contains('special-dot')) {
				circle.classList.add('special');
			} else {
				circle.classList.remove('special');
			}

			setTimeout(() => {
				circle.style.left = `${e.clientX - width / 2}px`;
				circle.style.top = `${e.clientY - height / 2}px`;
			}, 20);
		});
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

<div class="hidden circle special md:block" />

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="pageHeader">
		<!-- App Bar -->
		<AppBar
			background="bg-transparent headerBar"
			padding="pt-4"
			class="container flex justify-start mx-auto"
		>
			<svelte:fragment slot="lead">
				<a href="/" class="special-dot">
					<strong class="text-xl uppercase special-dot"> Jawad A. </strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="#work" on:click={handleAnchorClick} class="p-2 badge variant-filled special-dot"
					>{$t('common.work')}</a
				>
				<a href="#about" on:click={handleAnchorClick} class="p-2 badge variant-filled special-dot"
					>{$t('common.about')}</a
				>
				<a href="#contact" on:click={handleAnchorClick} class="p-2 badge variant-filled special-dot"
					>{$t('common.contact')}</a
				>
				<LightSwitch />
				{#if $locale === 'en'}
					<button
						class="badge-icon variant-filled-primary"
						on:click={() => {
							$locale = 'de';
							sessionStorage.setItem('locale', 'de');
						}}
					>
						<iconify-icon icon="emojione:flag-for-germany" />
					</button>
				{:else}
					<button
						class="badge-icon variant-filled-primary"
						on:click={() => {
							$locale = 'en';
							sessionStorage.setItem('locale', 'en');
						}}
					>
						<iconify-icon icon="emojione:flag-for-united-kingdom" />
					</button>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style>
	.circle {
		@apply h-6 w-6 rounded-full border-black border-2 absolute z-10 opacity-50 pointer-events-none transition-colors;
		transition-property: width, height;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
	}
	.special {
		@apply h-2 w-2 opacity-100 bg-error-900 transition-colors z-50;
		transition-property: width, height;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
	}
</style>
