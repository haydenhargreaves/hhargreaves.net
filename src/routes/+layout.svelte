<script lang="ts">
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	let { children } = $props();
</script>

<div class="bg-[#1b1b1c]">
	<Navbar />
	<main class="mx-[13%] my-[4%] h-fit min-h-screen">
		{@render children()}
	</main>
	<Footer />
</div>
