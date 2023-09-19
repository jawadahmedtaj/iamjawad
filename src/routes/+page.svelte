<script>
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { animate, stagger } from 'motion';

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
				x: [0, 5, -5, 0],
			},
			{
				duration: 1,
				repeat: Infinity,
				easing: "ease-out",
				direction: "alternate-reverse"
			}
		);
	});
</script>

<div id='top' class="container grid h-screen mx-auto place-items-center justify-items-start">
	<div class="flex flex-col space-y-10 text-2xl mainHeadings">
		<h2 class="font-bold h1">Hello <span class="waveIcon">👋</span></h2>
		<h4 class="h2">I'm Jawad Ahmed, <strong>Frontend Developer</strong></h4>
		<h5 class="h3">I build accessible, inclusive products and digital experiences for the web.</h5>
	</div>
</div>

<div class="container grid w-full h-screen mx-auto overflow-x-auto place-items-center justify-items-start projectsSection">
	<div class="flex overflow-x-scroll overflow-y-hidden projectsContainer">
		<div class="p-4 card h-96 w-96 individualCard">Basic</div>
		<div class="p-4 card h-96 w-96 individualCard">Basic</div>
		<div class="p-4 card h-96 w-96 individualCard">Basic</div>
		<div class="p-4 card h-96 w-96 individualCard">Basic</div>
		<div class="p-4 card h-96 w-96 individualCard">Basic</div>
		<div class="p-4 card h-96 w-96 individualCard">Basic</div>
		<div class="p-4 card h-96 w-96 individualCard">Basic</div>
		<div class="p-4 card h-96 w-96 individualCard">Basic</div>
		<div class="p-4 card h-96 w-96 individualCard">Basic</div>
	</div>
</div>

<div class="container grid h-screen mx-auto place-items-center justify-items-start">
	Test
</div>

<style lang="postcss">
</style>
