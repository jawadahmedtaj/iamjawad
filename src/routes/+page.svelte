<script>
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { animate, stagger, scroll, inView } from 'motion';

	onMount(() => {
		const text = new SplitType('.mainHeadings');
		animate(
			text.words,
			{
				opacity: [0, 1],
				y: [0, 5, 0],
				rotate: [0, 5, 0]
			},
			{
				duration: 0.5,
				delay: stagger(0.1)
			}
		);
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
				{ opacity: [0, 1], y: [0, 50, 0] },
				{ duration: 1 }
			);

			return () => leaveProject.stop();
		});
	});

	const technologyIcons = {
		VJS: ''
	};

	const projects = [
		{
			title: 'Color Game',
			image: '/images/ColorGame.png',
			description: {
				en: 'A game where the player needs to find the color with the RGB specified at the top',
				de: ''
			},
			technologyStack: [{ Name: 'VJS' }],
			deployment: 'de',
			codeLink: 'co'
		},
		{
			title: 'Test 2',
			image: '/images/DadJokes.png',
			description: {
				en: '',
				de: ''
			},
			technologyStack: [{ Name: 'VJS' }],
			deployment: '',
			codeLink: ''
		},
		{
			title: 'Test 3',
			image: '/images/DadJokes.png',
			description: {
				en: '',
				de: ''
			},
			technologyStack: [{ Name: 'VJS' }],
			deployment: '',
			codeLink: ''
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
	{#each projects as { title, image, description, deployment, codeLink }, idx (idx)}
		{#if idx % 2 === 0}
			<div class="grid grid-flow-col grid-cols-2 projectDetail" class:mt-4={idx > 0}>
				<div class="p-4 card">
					<img src={image} class="object-contain" alt="..." />
				</div>
				<div class="grid grid-flow-row gap-0 ml-2 place-content-center">
					<div class="self-center h2">Details</div>
					<div class="self-center h4">{description.en}</div>
					<div class="grid grid-flow-col">
						<span>{deployment}</span>
						<span>{codeLink}</span>
					</div>
				</div>
			</div>
			{:else}
			<div class="grid grid-flow-col grid-cols-2 projectDetail" class:mt-4={idx > 0}>
				<div class="grid items-center justify-start grid-flow-row gap-0 mr-2">
					<div class="self-center h2">Details</div>
					<div class="self-center h4">{description.en}</div>
				</div>
				<div class="p-4 card">
					<img src={image} class="object-contain" alt="..." />
				</div>
			</div>
		{/if}
	{/each}

	<p class="justify-self-end h4 projectDetail">See all project</p>
</div>

<div class="container grid h-screen mx-auto place-items-center justify-items-start">Test</div>

<style>
</style>
