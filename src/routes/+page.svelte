<script>
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { animate, stagger, inView } from 'motion';
	import Projects from '../lib/components/projects.svelte';

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
	});
</script>

<div id="top" class="container grid h-screen mx-auto place-items-center justify-items-start">
	<div class="flex flex-col space-y-10 text-2xl mainHeadings">
		<h2 class="font-bold h1">Hello <span class="waveIcon">👋</span></h2>
		<h4 class="h2">I'm Jawad Ahmed, <strong>Frontend Developer</strong></h4>
		<h5 class="h3">I build accessible, inclusive products and digital experiences for the web.</h5>
	</div>
</div>

<Projects />

<div id="about" class="container grid justify-start h-screen grid-flow-col mx-auto aboutSection">
	<img src="/images/self.png" class="hidden object-contain w-52 h-52 md:block" alt="..." />
	<p class="">Test</p>
</div>

<style>
	/* .aboutSection {
		background-image: url('/images/self.png');
		background-position: -70% 50%;
		background-repeat: no-repeat;
		background-size: 75%;
	} */
</style>
