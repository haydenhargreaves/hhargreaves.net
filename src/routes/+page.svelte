<script>
	import Projects from '../components/projects.svelte';
	import Skills from '../components/skills.svelte';
</script>

<main class="h-fit w-full">
	<!-- Introduction Section -->
	<div class="flex flex h-fit w-full">
		<div class="flex size-full justify-end">
			<div class="my-16 w-3/4">
				<h1 class="p-2 text-6xl font-[600] text-blue-300">Building things that matter.</h1>
				<p class="my-5 p-2 text-gray-200 italic">
					I am a <span class="text-blue-300">software engineering student</span> at Embry Riddle
					Aeronautical University, Prescott. I am interested in
					<span class="font-semibold">building things that matter</span> and making a difference in the
					world.
				</p>
			</div>
		</div>
		<div class="size-full"></div>
	</div>

	<div class="flex h-full w-full flex-row">
		<!-- Left Column -->
		<div class="flex size-full flex-col items-end">
			<div class="h-full w-3/4">
				<Projects />
			</div>
		</div>

		<!-- Right Column -->
		<div class="flex size-full justify-center">
			<div class="h-full w-3/4">
				<Skills />
			</div>
		</div>
	</div>
</main>
