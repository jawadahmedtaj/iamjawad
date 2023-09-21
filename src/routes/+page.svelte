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

<div id="about" class="container grid grid-flow-row mx-auto pb-9 place-content-start aboutSection">
	<p class="text-2xl font-semibold">About</p>
	<div class="pt-10 text-center aboutSection">
		<img src="/images/self.png" class="hidden float-left object-contain w-52 md:block" alt="..." />
		<div class="text-justify text-md lg:text-xl">
			<p>With over seven years of experience in the field, I have honed my skills and expertise to deliver exceptional results in the world of remote work. My journey in the digital realm has been nothing short of exhilarating, and I am thrilled to share my work and experiences with you.</p>
			<p class="mt-3">Throughout my career, I have had the privilege of working remotely on a wide range of projects, spanning various industries and technologies. From the comfort of my home office, I have collaborated with teams across the globe, delivering innovative solutions that have left a lasting impact.</p>
			<p class="mt-3">One of the most rewarding aspects of my career has been witnessing the projects I've contributed to being embraced by hundreds of users. Knowing that my work has made a positive difference in the lives of people around the world is truly fulfilling. It's a testament to the dedication and passion I pour into every project I undertake.</p>
			<p class="mt-3">As you explore my portfolio, you will find a diverse collection of work, each project a testament to my commitment to excellence and my ability to adapt to different challenges. From web applications to mobile apps, from design to development, I've had the opportunity to explore various facets of the digital landscape.</p>
			<p class="mt-3">I believe that innovation is a continuous journey, and I am excited to continue pushing the boundaries of what's possible in the world of technology. Whether you're here to learn more about my past work, explore potential collaboration opportunities, or simply get inspired, I invite you to dive into my portfolio and join me on this exciting journey.</p>
			<p class="mt-3">Thank you for visiting, and I look forward to connecting with you. Together, we can create something extraordinary.</p>
			<a href="mailto:jawadahmedtaj@gmail.com" target="_blank" class="mt-3">jawadahmedtaj@gmail.com</a>
		</div>
	</div>
</div>
<!-- <div class="container grid grid-flow-row mx-auto">
	<div class="grid justify-between grid-flow-col">
		<p>Capabilities</p>
		<p>Capabilities</p>
	</div>
	<p>Contact</p>
	<div class="grid justify-between grid-flow-col">
		<div class="grid grid-flow-row">
			<p>Developer?</p>
			<p>Developer?</p>
		</div>
		<div class="grid grid-flow-row">
			<p>Elsewhere?</p>
			<p>Elsewhere?</p>
		</div>
	</div>
</div> -->

<style>
	/* .aboutSection {
		background-image: url('/images/self.png');
		background-position: -70% 50%;
		background-repeat: no-repeat;
		background-size: 75%;
	} */
</style>
