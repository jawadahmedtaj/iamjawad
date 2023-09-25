<script>
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { animate, stagger, inView } from 'motion';
	import Projects from '../lib/components/projects.svelte';
	import { t, locale } from '$lib/translations';

	onMount(() => {
		const text = new SplitType('.mainHeadings');
		inView(text.words, () => {
			const leave = animate(
				text.words,
				{ opacity: [0, 1], y: [-10, 0], rotate: [-5, 0] },
				{ duration: 0.5, delay: stagger(0.1) }
			);

			// return () => leave.stop();
		});
		animate(
			'.waveIcon',
			{
				rotate: [0, 5, -5, 0],
				x: [0, 5, -5, 0]
			},
			{
				duration: 1,
				repeat: Infinity,
				easing: 'ease-out',
				direction: 'alternate-reverse'
			}
		);

		inView('.aboutSection', () => {
			animate(
				'.aboutSection',
				{
					opacity: [0, 1],
					y: [-25, 0]
				},
				{
					duration: 1,
					easing: 'ease-out'
				}
			);
		});

		const aboutText = document.querySelector('.aboutTexts').querySelectorAll('p');

		inView(aboutText, () => {
			const leave = animate(
				aboutText,
				{ opacity: [0, 1], y: [-10, 0] },
				{ duration: 0.5, delay: stagger(0.1) }
			);
		});

		const contactSection = document.querySelector('.contactSection');

		inView(contactSection, () => {
			const leave = animate(contactSection, { opacity: [0, 1], y: [-25, 0] }, { duration: 1 });
		});
	});

	$: capabilities = $t('about.capabilities.keys').map((key) => key.title);

	const socials = [
		{
			name: 'Twitter',
			icon: 'mdi:twitter',
			link: 'https://twitter.com/JawadAh57345713'
		},
		{
			name: 'Github',
			icon: 'mdi:github',
			link: 'https://github.com/jawadahmedtaj'
		},
		{
			name: 'Linkedin',
			icon: 'mdi:linkedin',
			link: 'https://www.linkedin.com/in/jawad-ahmed-1884b45b/'
		},
		{
			name: 'Instagram',
			icon: 'mdi:instagram',
			link: 'https://www.instagram.com/illegalsnowman/'
		}
	];
</script>

{#key $locale}
	<div id="top" class="container grid h-screen mx-auto place-items-center justify-items-start">
		<div class="flex flex-col space-y-10 text-2xl mainHeadings">
			<h2 class="font-bold h1">{$t('common.hello')} <span class="waveIcon">👋</span></h2>
			<h4 class="h2">{$t('common.title')}, <strong>{$t('common.job')}</strong></h4>
			<h5 class="h3">{$t('common.subtitle')}</h5>
		</div>
	</div>
{/key}

<Projects quantity={4} />

<div id="about" class="container grid grid-flow-row mx-auto pb-9 place-content-start aboutSection">
	<p class="text-2xl font-semibold">About</p>
	<div class="pt-10 text-center aboutSection">
		<img src="/images/self.png" class="hidden float-left object-contain w-52 md:block" alt="..." />
		<div class="text-justify text-md lg:text-xl aboutTexts">
			<p>
				{$t('about.p1')}
			</p>
			<p class="mt-3">
				{$t('about.p2')}
			</p>
			<p class="mt-3">
				{$t('about.p3')}
			</p>
			<p class="mt-3">
				{$t('about.p4')}
			</p>
			<p class="mt-3">
				{$t('about.p5')}
			</p>
			<p class="mt-3">
				{$t('about.p6')}
			</p>
		</div>
	</div>
</div>
<div class="container grid grid-flow-row mx-auto pb-9 contactSection">
	<div
		class="grid justify-center grid-flow-row sm:justify-between sm:grid-flow-col pb-9 place-items-center"
	>
		<p class="text-4xl font-semibold">{$t('about.capabilities.title')}</p>
		<div class="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
			{#each capabilities as capability, idx (idx)}
				<button class="btn variant-outline-primary w-44">{capability}</button>
			{/each}
		</div>
	</div>
	<p class="text-4xl font-semibold text-center sm:text-start">{$t('about.contact.title')}</p>
	<div id="contact" class="grid justify-center grid-flow-row sm:justify-between sm:grid-flow-col">
		<div class="grid grid-flow-row">
			<p class="pt-2">{$t('about.contact.top')}</p>
			<p class="pt-2 text-xs">
				{$t('about.contact.bottom')}<a href="mailto:jawadahmedtaj@gmail.com" target="_blank"
					>jawadahmedtaj@gmail.com</a
				>
			</p>
		</div>
		<div class="grid grid-cols-1 gap-1 md:grid-cols-2 xl:grid-cols-4">
			{#each socials as social, idx (idx)}
				<button class="w-40 place-self-center btn variant-outline-primary">
					<a href={social.link} target="_blank">
						<iconify-icon icon={social.icon} />
						{social.name}
					</a>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
</style>
