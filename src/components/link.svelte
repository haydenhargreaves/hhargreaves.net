<script lang="ts">
	export let href: string;
	export let text: string;
</script>

<a {href} class="group relative inline-block no-underline" target="_blank">
	<span class="relative z-10 font-semibold text-gray-300">{text}</span>
	<span
		class="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-300 transition-all duration-300 group-hover:w-full"
	></span>
</a>
