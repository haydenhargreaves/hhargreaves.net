<script lang="ts">
	export let company: string;
	export let position: string;
	export let timeframe: string;
	export let description: string;
</script>

<div class="my-8 w-full">
	<h2 class="py-2 text-2xl font-semibold text-blue-200">{company}</h2>
	<p class="text-sm text-gray-200 font-semibold">
		{position} <span class="font-normal italic">({timeframe})</span>
	</p>
	<p class="py-4 text-gray-200">{description}</p>
</div>
