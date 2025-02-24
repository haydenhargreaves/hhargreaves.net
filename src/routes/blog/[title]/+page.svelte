<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="blog-wrapper prose">
	{@html data.post.content}
</div>
