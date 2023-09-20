<script>
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { animate, stagger, scroll, inView } from 'motion';

	onMount(() => {
		const text = new SplitType('.mainHeadings');
		inView(text.words, () => {
			const leave = animate(
				text.words,
				{ opacity: [0, 1], y: [-10, 0], rotate: [-5, 0] },
				{ duration: 0.5, delay: stagger(0.1) }
			);

			return () => leave.stop();
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
		const projectCards = document.querySelectorAll('.projectDetail');
		inView(projectCards, (element) => {
			const leaveProject = animate(
				element.target,
				{ opacity: [0, 1], y: [-50, 0] },
				{ duration: 1.5 }
			);

			return () => leaveProject.stop();
		});

		const allProjects = document.querySelector('.allProjects');
		inView(allProjects, (element) => {
			const leaveProject = animate(
				element.target,
				{ opacity: [0, 1], y: [-50, 0] },
				{ duration: 1.5 }
			);

			return () => leaveProject.stop();
		});

		animate(
			allProjects,
			{ x: [-10, 0, 10] },
			{ duration: 1, repeat: Infinity, direction: 'alternate' }
		);
	});

	const technologyIcons = {
		vue: 'logos:vue',
		github: 'mdi:github',
		netlify: 'logos:netlify',
		svelte: 'devicon:svelte',
		tailwindcss: 'devicon:tailwindcss',
		react: 'devicon:react',
		vueuse: 'logos:vueuse',
		firebase: 'logos:firebase',
		nuxt: 'logos:nuxt-icon',
		css: 'logos:css-3',
		html: 'logos:html-5',
		js: 'logos:javascript'
	};

	const projects = [
		{
			title: 'Introspectify',
			image: '/images/Introspectify.png',
			description: {
				en: 'A productivity app that helps you track your time and stay focused on your goals. All data is stored locally, no backend.',
				de: ''
			},
			technologyStack: ['svelte', 'html', 'css', 'js', 'tailwindcss'],
			deployment: { link: 'https://introspectify.netlify.app/', icon: 'netlify' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/introspectify', icon: 'github' }
		},
		{
			title: 'Chat App',
			image: '/images/ChatApp.png',
			description: {
				en: 'A simple chat application made using Vue 3/Nuxt 3 with firebase integration',
				de: ''
			},
			technologyStack: ['vue', 'nuxt', 'html', 'css', 'js', 'tailwindcss', 'vueuse', 'firebase'],
			deployment: { link: 'https://chat-app-jawad.netlify.app/', icon: 'netlify' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/chat-app-nuxt', icon: 'github' }
		},
		{
			title: 'Dad Jokes',
			image: '/images/DadJokes.png',
			description: {
				en: 'An app that fetches dad jokes from an API and displays them. Made using React.',
				de: ''
			},
			technologyStack: ['react', 'html', 'css', 'js'],
			deployment: { link: 'https://dadjokesapp-jawad.netlify.app', icon: 'netlify' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/React-Dad-Jokes', icon: 'github' }
		}
	];
</script>

<div id="top" class="container grid h-screen mx-auto place-items-center justify-items-start">
	<div class="flex flex-col space-y-10 text-2xl mainHeadings">
		<h2 class="font-bold h1">Hello <span class="waveIcon">👋</span></h2>
		<h4 class="h2">I'm Jawad Ahmed, <strong>Frontend Developer</strong></h4>
		<h5 class="h3">I build accessible, inclusive products and digital experiences for the web.</h5>
	</div>
</div>

<div class="container grid h-screen mx-auto place-items-center sectionContainer" id="work">
	{#each projects as { title, image, description, deployment, codeLink, technologyStack }, idx (idx)}
		{#if idx % 2 === 0}
			<div class="grid grid-flow-col grid-cols-2 projectDetail" class:mt-4={idx > 0}>
				<div class="p-4 card">
					<img src={image} class="object-contain" alt="..." />
				</div>
				<div class="grid justify-start grid-flow-row gap-0 ml-2 place-content-center">
					<div class="self-center h2">{title}</div>
					<div class="self-center pt-2 h4">{description.en}</div>
					<div class="grid justify-start grid-flow-col pt-2 text-2xl">
						<a href={deployment.link} target="_blank" class="btn variant-filled-primary">
							<iconify-icon icon={technologyIcons[deployment.icon]} />
						</a>
						<a href={codeLink.link} target="_blank" class="ml-2 btn variant-filled-primary">
							<iconify-icon icon={technologyIcons[codeLink.icon]} />
						</a>
					</div>
					<div class="grid items-center justify-start grid-flow-col gap-1">
						<p>Stack:</p>
						{#each technologyStack as icon}
							<iconify-icon icon={technologyIcons[icon]} />
						{/each}
					</div>
				</div>
			</div>
		{:else}
			<div class="grid grid-flow-col grid-cols-2 projectDetail" class:mt-4={idx > 0}>
				<div class="grid justify-start grid-flow-row gap-0 ml-2 place-content-center">
					<div class="self-center h2">{title}</div>
					<div class="self-center pt-2 h4">{description.en}</div>
					<div class="grid justify-start grid-flow-col pt-2 text-2xl">
						<a href={deployment.link} target="_blank" class="btn variant-filled-primary">
							<iconify-icon icon={technologyIcons[deployment.icon]} />
						</a>
						<a href={codeLink.link} target="_blank" class="ml-2 btn variant-filled-primary">
							<iconify-icon icon={technologyIcons[codeLink.icon]} />
						</a>
					</div>
					<div class="grid items-center justify-start grid-flow-col gap-1">
						<p>Stack:</p>
						{#each technologyStack as icon}
							<iconify-icon icon={technologyIcons[icon]} />
						{/each}
					</div>
				</div>
				<div class="p-4 card">
					<img src={image} class="object-contain" alt="..." />
				</div>
			</div>
		{/if}
	{/each}

	<a
		href="/projects"
		class="flex place-content-center justify-self-end h4 allProjects btn variant-filled-primary"
		>See all project <iconify-icon icon="carbon:chevron-right" />
	</a>
</div>

<div class="container grid mx-auto">Test</div>

<style>
</style>
