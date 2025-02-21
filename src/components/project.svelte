<script lang="ts">
	export let title: string;
	export let description: string;
	export let date: string;
	export let stack: string[];
	export let image: string | null;
	export let imageAlt: string | null;
	export let link: string | null;
</script>

<div class="my-8 w-full">
	<h2 class="py-2 text-2xl font-semibold text-blue-200">{title}</h2>
	<p class="text-sm text-gray-200 italic">
		{date}: <span class="text-blue-200 not-italic">{stack.join(', ')}</span>
	</p>
	<p class="py-4 text-gray-200">{description}</p>
	{#if image}
		<img class="my-2 lg:w-full" src={image} alt={imageAlt} />
	{/if}

	{#if link}
		<a href={link} target="_blank" class="text-sm text-blue-400">View Source.</a>
	{/if}
</div>
