<script lang="ts">
	export let message: string;
</script>

<div class="my-[30%] flex h-full w-full flex-col items-center justify-center">
	<h1 class="py-8 text-6xl font-semibold text-gray-300 italic opacity-30">404 - Not Found</h1>
	<p class="text-sm text-gray-300 italic">
		{message}
	</p>
</div>
