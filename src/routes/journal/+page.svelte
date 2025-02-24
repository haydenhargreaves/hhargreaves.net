<script lang="ts">
	import Link from '../../components/link.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();

	// Sort the posts by date, descending
	data.posts.sort((a, b) => {
		if (a.date > b.date) return -1;
		if (a.date < b.date) return 1;
		return 0;
	});
</script>

<!-- Header -->
<div class="my-8 w-1/2">
	<h1 class="font-mono text-6xl font-[900] text-blue-300">Journal.</h1>
	<p class="my-5 py-2 text-gray-200 italic">
		Here you can find my journal where I write all kinds of tech-related things. Some of them are about my
		projects, some are about my thoughts, and some are about my experiences. I hope you enjoy!
	</p>
</div>
<!-- Posts List -->
<div class="w-2/3">
	{#if data.posts.length === 0}
		<h2 class="py-8 text-6xl font-semibold text-gray-300 italic opacity-30">404</h2>
		<p class="w-2/3 text-gray-300">
			Uh oh! There are no posts to show. Check back later for more content! If you think this is a
			mistake or have any interesting ideas, please let me know by sending me an
			<Link href="mailto:hhargreaves2006@gmail.com" text="email" />.
		</p>
	{/if}
	{#each data.posts as post}
		<div class="group my-5 rounded-sm border-l-4 border-blue-300 px-4">
			<h2 class="text-xl">
				<a href={post.path} class="group relative inline-block no-underline">
					<span class="relative z-10 text-gray-300">{post.title}</span>
					<span
						class="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-300 transition-all duration-300 group-hover:w-full"
					></span>
				</a>
			</h2>
			<p class="text-sm text-gray-400">{post.description}</p>
		</div>
	{/each}
</div>
