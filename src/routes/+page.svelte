<script>
	import Projects from '../components/projects.svelte';
	import Work from '../components/workExperience.svelte';
	import Skills from '../components/skills.svelte';
	import Resume from '../components/resume.svelte';
</script>

<div class="flex h-fit w-full flex-col md:flex-row">
	<div class="flex-1">
		<div class="px-4 md:px-0">
			<h1 class="my-14 py-2 font-mono text-4xl font-[900] text-blue-300 md:text-6xl">
				Building things that matter.
			</h1>
			<p class="my-5 py-2 text-gray-200 italic">
				I am a <span class="text-blue-300">software engineering student</span> at Embry Riddle
				Aeronautical University, Prescott. I am interested in
				<span class="font-semibold">building things that matter</span> and making a difference in the
				world.
			</p>
		</div>
	</div>
	<div class="hidden flex-1 md:block"></div>
</div>

<div class="mt-12 flex w-full flex-col md:mt-24 md:flex-row">
	<div class="flex-1 md:w-2/3 md:flex-none">
		<div class="w-full px-4 md:w-3/4 md:px-0">
			<Resume />
			<Work />
			<Projects />
		</div>
	</div>
	<div class="mt-12 flex-1 px-4 md:mt-0 md:w-1/3 md:px-0">
		<div class="w-full">
			<Skills />
		</div>
	</div>
</div>
