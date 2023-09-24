<script>
	import { onMount } from 'svelte';
	import { animate, inView } from 'motion';
	import { Tooltip } from '@svelte-plugins/tooltips';

	export let showLink = true;
	export let quantity = undefined;

	onMount(() => {
		const projectCards = document.querySelectorAll('.projectDetail');
		inView(projectCards, (element) => {
			const leaveProject = animate(
				element.target,
				{ opacity: [0, 1], y: [-50, 0] },
				{ duration: 1.5 }
			);

			// return () => leaveProject.stop();
		});
		if (showLink) {
			const allProjects = document.querySelector('.allProjects');
			inView(allProjects, (element) => {
				const leaveProject = animate(
					element.target,
					{ opacity: [0, 1], y: [-50, 0] },
					{ duration: 1.5 }
				);
				// return () => leaveProject.stop();
			});
			animate(
				allProjects,
				{ x: [-10, 0, 10] },
				{ duration: 1, repeat: Infinity, direction: 'alternate' }
			);
		}
	});

	const technologyIcons = {
		vue: { icon: 'logos:vue', title: 'Vue 2/3' },
		github: { icon: 'mdi:github', title: 'Github' },
		netlify: { icon: 'logos:netlify', title: 'Netlify' },
		svelte: { icon: 'devicon:svelte', title: 'Svelte/SvelteKit' },
		tailwindcss: { icon: 'devicon:tailwindcss', title: 'Tailwindcss' },
		react: { icon: 'devicon:react', title: 'React' },
		vueuse: { icon: 'logos:vueuse', title: 'Vueuse' },
		firebase: { icon: 'logos:firebase', title: 'Firebase' },
		nuxt: { icon: 'logos:nuxt-icon', title: 'Nuxt 3' },
		css: { icon: 'logos:css-3', title: 'CSS' },
		html: { icon: 'logos:html-5', title: 'HTML' },
		js: { icon: 'logos:javascript', title: 'Javascript' },
		pwa: { icon: 'logos:pwa', title: 'PWA - Progressive Web App' },
		vuetify: { icon: 'logos:vuetifyjs', title: 'Vuetify' },
		antDesign: { icon: 'logos:ant-design', title: 'Ant Design' },
		pinia: { icon: 'logos:pinia', title: 'Pinia' },
		naive: { icon: 'logos:naiveui', title: 'Naive UI' },
		aws: { icon: 'logos:aws', title: 'AWS' },
		laravel: { icon: 'logos:laravel', title: 'Laravel' },
		bootstrap: { icon: 'logos:bootstrap', title: 'Bootstrap' },
		inertia: { icon: 'simple-icons:inertia', title: 'Inertia'},
		node: { icon: 'logos:nodejs', title: 'Nodejs'},
		express: { icon: 'skill-icons:expressjs-light', title: 'Express'}
	};

	let projects = [
		{
			title: 'C3-CRM',
			image: '/images/projects/C3CRM.png',
			description: {
				en: 'Official CRM solution of Thomasgold solutions. The CRM is built using our own custom Corteza Low Code Platform based implementation. However calendar is made separately using Nuxt 3, Pinia, Tailwindcss, Vueuse, Ant design, and Vuetify',
				de: ''
			},
			technologyStack: [
				'html',
				'css',
				'js',
				'vue',
				'nuxt',
				'pinia',
				'tailwindcss',
				'vueuse',
				'antDesign',
				'vuetify'
			],
			deployment: { link: '', icon: '' },
			codeLink: { link: '', icon: '' }
		},
		{
			title: 'Botsify Chat bot',
			image: '/images/projects/Botsify.png',
			description: {
				en: 'A chatbot building platform that helps you build chatbots for your business. I worked on the frontend of the platform. The frontend is built using Vue 2, Bootstrap, and Laravel, and the user portal using Vue 2, bootstrap, laravel, and inertiajs. I also worked on the chatbot itself, which was using developed using Vue 2, Tailwindcss, and Laravel.',
				de: ''
			},
			technologyStack: ['html', 'css', 'js', 'vue', 'tailwindcss', 'bootstrap', 'inertia', 'laravel'],
			deployment: { link: 'https://botsify.com/', icon: 'aws' },
			codeLink: { link: '', icon: '' }
		},
		{
			title: 'Introspectify',
			image: '/images/projects/Introspectify.png',
			description: {
				en: 'A productivity app that helps you track your time and stay focused on your goals. All data is stored locally, no backend.',
				de: ''
			},
			technologyStack: ['html', 'css', 'js', 'svelte', 'tailwindcss', 'pwa'],
			deployment: { link: 'https://introspectify.netlify.app/', icon: 'netlify' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/introspectify', icon: 'github' }
		},
		{
			title: 'YelpCamp',
			image: '/images/projects/YelpCamp.png',
			description: {
				en: 'An application that is a replica of Yelp, but for camping site. Using Node, Passportjs, Express, ejs, and bootstrap.',
				de: ''
			},
			technologyStack: ['html', 'css', 'js', 'node', 'express', 'bootstrap'],
			deployment: { link: '', icon: '' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/YelpCamp', icon: 'github' }
		},
		{
			title: 'Chat App',
			image: '/images/projects/ChatApp.png',
			description: {
				en: 'A simple chat application made using Vue 3/Nuxt 3 with firebase integration',
				de: ''
			},
			technologyStack: [
				'html',
				'css',
				'js',
				'vue',
				'nuxt',
				'naive',
				'pinia',
				'tailwindcss',
				'vueuse',
				'firebase',
				'pwa'
			],
			deployment: { link: 'https://chat-app-jawad.netlify.app/', icon: 'netlify' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/chat-app-nuxt', icon: 'github' }
		},
		{
			title: 'Dad Jokes',
			image: '/images/projects/DadJokes.png',
			description: {
				en: 'An app that fetches dad jokes from an API and displays them. Made using React.',
				de: ''
			},
			technologyStack: ['html', 'css', 'js', 'react'],
			deployment: { link: 'https://dadjokesapp-jawad.netlify.app', icon: 'netlify' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/React-Dad-Jokes', icon: 'github' }
		},
		{
			title: 'Trivia Application',
			image: '/images/projects/Trivia.png',
			description: {
				en: "An app that I made using Vue 2, vuex for a friend's birthday. It is a trivia application that have options for multiple type of questions. It has a simple score counter as well that unlocks messages from other friends for the user.",
				de: ''
			},
			technologyStack: ['html', 'css', 'js', 'vue'],
			deployment: { link: 'https://trivia-sparky.netlify.app/', icon: 'netlify' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/triviaApp', icon: 'github' }
		},
		{
			title: 'Words to Morse Code',
			image: '/images/projects/wordstomorse.png',
			description: {
				en: 'A simple application that converts input text into morse code sound.',
				de: ''
			},
			technologyStack: ['html', 'css', 'js', 'react'],
			deployment: { link: 'https://words2morsecode.netlify.app/', icon: 'netlify' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/words-to-morse-code', icon: 'github' }
		},
		{
			title: 'Task timing application',
			image: '/images/projects/Task-timing.png',
			description: {
				en: 'A simple application that checks the reaction time of the user based on 2 different kinds of tasks.',
				de: ''
			},
			technologyStack: ['html', 'css', 'js', 'react'],
			deployment: { link: 'https://usabilitytask5.netlify.app/', icon: 'netlify' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/Usability-Tasks', icon: 'github' }
		},
		{
			title: 'Dog finder application',
			image: '/images/projects/Dog-finder.png',
			description: {
				en: 'An application that showcases a few dogs.',
				de: ''
			},
			technologyStack: ['html', 'css', 'js', 'react', 'pwa'],
			deployment: { link: 'https://dog-finder-ja.netlify.app/dogs', icon: 'netlify' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/dog-finder', icon: 'github' }
		},
		{
			title: 'Deck of cards',
			image: '/images/projects/Deck-of-cards.png',
			description: {
				en: 'An application that fetches a deck of cards from an API and displays them. Made using React.',
				de: ''
			},
			technologyStack: ['html', 'css', 'js', 'react', 'pwa'],
			deployment: { link: 'https://deckofcards-ja.netlify.app/', icon: 'netlify' },
			codeLink: { link: 'https://github.com/jawadahmedtaj/deck-of-cards', icon: 'github' }
		}
	];

	$: filteredProjects = projects.slice(0, quantity || projects.length);
</script>

<div class="container grid pb-5 mx-auto place-items-center sectionContainer" id="work">
	{#each filteredProjects as { title, image, description, deployment, codeLink, technologyStack }, idx (idx)}
		<div class="grid grid-flow-row projectDetail md:grid-flow-col" class:mt-4={idx > 0}>
			<div
				class="self-center p-4 card"
				class:md:order-2={idx % 2 !== 0}
				class:order-1={idx % 2 !== 0}
			>
				<img src={image} class="object-contain" alt="..." />
			</div>
			<div
				class="grid justify-start grid-flow-row gap-0 ml-2 place-content-center"
				class:md:order-1={idx % 2 !== 0}
				class:order-2={idx % 2 !== 0}
			>
				<div class="self-center h2">{title}</div>
				<div class="self-center pt-2 h4">{description.en}</div>
				<div class="grid justify-start grid-flow-col pt-2 text-2xl">
					{#if deployment.link}
						<Tooltip content="Live Demo">
							<a href={deployment.link} target="_blank" class="btn variant-filled-primary">
								<iconify-icon icon={technologyIcons[deployment.icon].icon} />
							</a>
						</Tooltip>
					{/if}
					{#if codeLink.link}
						<Tooltip content="Code">
							<a href={codeLink.link} target="_blank" class="ml-2 btn variant-filled-primary">
								<iconify-icon icon={technologyIcons[codeLink.icon].icon} />
							</a>
						</Tooltip>
					{/if}
				</div>
				<div class="grid items-center justify-start grid-flow-col gap-1 pt-2">
					{#each technologyStack as icon}
						<Tooltip content={technologyIcons[icon].title}>
							<iconify-icon icon={technologyIcons[icon].icon} />
						</Tooltip>
					{/each}
				</div>
			</div>
		</div>
	{/each}

	{#if showLink}
		<a
			href="/projects"
			class="flex mt-10 place-content-center justify-self-end h4 allProjects btn variant-filled-primary"
			>See all project <iconify-icon icon="carbon:chevron-right" />
		</a>
	{/if}
</div>
