<script lang="ts">
	import NotFound from '../../../components/notFound.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

{#if data.post.error}
	<NotFound message={data.post.error} />
{:else}
	<div class="blog-wrapper prose">
		{@html data.post.content}
	</div>
{/if}
