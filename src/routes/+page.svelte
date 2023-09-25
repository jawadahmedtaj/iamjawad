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

	const capabilities = [
		'Mentorship',
		'Team player',
		'Communication',
		'Problem solving',
		'Time management'
	];

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
				With over seven years of experience in the field, I have honed my skills and expertise to
				deliver exceptional results in the world of remote work. My journey in the digital realm has
				been nothing short of exhilarating, and I am thrilled to share my work and experiences with
				you.
			</p>
			<p class="mt-3">
				Throughout my career, I have had the privilege of working remotely on a wide range of
				projects, spanning various industries and technologies. From the comfort of my home office,
				I have collaborated with teams across the globe, delivering innovative solutions that have
				left a lasting impact.
			</p>
			<p class="mt-3">
				One of the most rewarding aspects of my career has been witnessing the projects I've
				contributed to being embraced by hundreds of users. Knowing that my work has made a positive
				difference in the lives of people around the world is truly fulfilling. It's a testament to
				the dedication and passion I pour into every project I undertake.
			</p>
			<p class="mt-3">
				As you explore my portfolio, you will find a diverse collection of work, each project a
				testament to my commitment to excellence and my ability to adapt to different challenges.
				From web applications to mobile apps, from design to development, I've had the opportunity
				to explore various facets of the digital landscape.
			</p>
			<p class="mt-3">
				I believe that innovation is a continuous journey, and I am excited to continue pushing the
				boundaries of what's possible in the world of technology. Whether you're here to learn more
				about my past work, explore potential collaboration opportunities, or simply get inspired, I
				invite you to dive into my portfolio and join me on this exciting journey.
			</p>
			<p class="mt-3">
				Thank you for visiting, and I look forward to connecting with you. Together, we can create
				something extraordinary.
			</p>
		</div>
	</div>
</div>
<div class="container grid grid-flow-row mx-auto pb-9 contactSection">
	<div
		class="grid justify-center grid-flow-row sm:justify-between sm:grid-flow-col pb-9 place-items-center"
	>
		<p class="text-4xl font-semibold">Capabilities</p>
		<div class="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
			{#each capabilities as capability, idx (idx)}
				<button class="btn variant-outline-primary w-44">{capability}</button>
			{/each}
		</div>
	</div>
	<p class="text-4xl font-semibold text-center sm:text-start">Contact</p>
	<div id="contact" class="grid justify-center grid-flow-row sm:justify-between sm:grid-flow-col">
		<div class="grid grid-flow-row">
			<p class="pt-2">Need to get in touch?</p>
			<p class="pt-2 text-xs">
				Shoot me a note with your project details at <a
					href="mailto:jawadahmedtaj@gmail.com"
					target="_blank">jawadahmedtaj@gmail.com</a
				>
			</p>
		</div>
		<div class="grid grid-cols-1 gap-1 md:grid-cols-2 xl:grid-cols-4">
			{#each socials as social, idx (idx)}
				<button class="w-44 place-self-center btn variant-outline-primary">
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
