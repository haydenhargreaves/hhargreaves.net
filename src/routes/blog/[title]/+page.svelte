<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();

	console.log(`Post's date: ${data.post.date.toUTCString()}`);
</script>

{#if data.post.error}
	<main class="flex min-h-screen w-full flex-col items-center justify-center">
		<h1 class="py-8 text-6xl font-semibold text-gray-300 italic opacity-30">404 - Not Found</h1>
		<p class="text-sm text-gray-300 italic">
			{data.post.error}
		</p>
	</main>
{:else}
	<div class="blog-wrapper prose mx-[7.5%] my-[3%]">
		{@html data.post.content}
	</div>
{/if}
