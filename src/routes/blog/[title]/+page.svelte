<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="blog-wrapper prose">
	{@html data.post.content}
</div>
<ul class="list-disc">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
