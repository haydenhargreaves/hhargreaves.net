<script>
	import Projects from '../components/projects.svelte';
	import Skills from '../components/skills.svelte';
</script>

<!-- Introduction Section -->
<div class="flex flex h-fit w-full">
	<div class="flex size-full">
		<div class="">
			<h1 class="py-2 font-mono text-6xl font-[900] text-blue-300">Building things that matter.</h1>
			<p class="my-5 py-2 text-gray-200 italic">
				I am a <span class="text-blue-300">software engineering student</span> at Embry Riddle
				Aeronautical University, Prescott. I am interested in
				<span class="font-semibold">building things that matter</span> and making a difference in the
				world.
			</p>
		</div>
	</div>
	<!-- DO NOT DELETE THIS -->
	<div class="size-full"></div>
</div>

<div class="mt-24 flex h-full w-full flex-row">
	<!-- Left Column -->
	<div class="flex h-full w-2/3 flex-col">
		<div class="w-3/4">
			<Projects />
		</div>
	</div>

	<!-- Right Column -->
	<div class="flex h-full w-1/3 justify-center">
		<div class="h-full w-full">
			<Skills />
		</div>
	</div>
</div>
