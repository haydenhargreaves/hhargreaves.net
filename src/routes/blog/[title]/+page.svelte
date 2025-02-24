<script lang="ts">
	import type { PageProps } from './$types';
	// import hljs from 'highlight.js';

	let { data }: PageProps = $props();
	// Run highlight.js after the component is rendered (onMount or after each update)
	// import { onMount } from 'svelte';
	//
	// onMount(() => {
	// 	// console.log("onMount called");
	// 	highlightAllCodeBlocks();
	// });
	//
	// function highlightAllCodeBlocks() {
	// 	// console.log("highlightAllCodeBlocks called");
	// 	const codeBlocks = document.querySelectorAll('pre code');
	// 	codeBlocks.forEach((block) => {
	// 		hljs.highlightElement(block);
	// 	});
	// }
</script>

<div class="prose">
	{@html data.post.content}
</div>
