<script lang="ts">
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	let { children } = $props();
</script>

<div class="bg-[#1b1b1c]">
	<Navbar />
	{@render children()}
	<Footer />
</div>
