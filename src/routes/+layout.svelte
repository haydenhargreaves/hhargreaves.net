<script lang="ts">
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
