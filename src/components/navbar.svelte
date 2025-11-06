<script>
	import { linear } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<nav
	class="relative top-0 flex w-full border-b-1 border-gray-700 bg-[#1b1b1c] py-6"
	aria-label="Main Navigation"
>
	<div class="ml-4 flex items-center">
		<h3 class="text-2xl font-[600] text-gray-200">Hayden Hargreaves</h3>
		<p class="text-md ml-2 hidden text-gray-200 italic md:block">Software Engineer</p>
	</div>

	<div class="mx-4 ml-auto flex items-center text-gray-200">
		<div class="hidden md:flex" role="navigation" aria-label="Desktop Navigation">
			<a href="/" class="transition-all duration-150 hover:text-blue-300" aria-label="Home">
				<p class="px-3">Home</p>
			</a>
			<a href="/about" class="transition-all duration-150 hover:text-blue-300" aria-label="About">
				<p class="px-3">About</p>
			</a>
			<a
				href="/journal"
				class="transition-all duration-150 hover:text-blue-300"
				aria-label="Journal"
			>
				<p class="px-3">Journal</p>
			</a>
			<a
				href="https://github.com/haydenhargreaves"
				target="_blank"
				class="transition-all duration-150 hover:text-blue-300"
				aria-label="GitHub"
			>
				<svg
					viewBox="0 0 98 96"
					xmlns="http://www.w3.org/2000/svg"
					class="mx-4 h-auto w-6"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
						fill="#fff"
					/>
				</svg>
			</a>
			<a
				href="https://git.gophernest.net/azpect"
				target="_blank"
				class="transition-all duration-150 hover:text-blue-300"
				aria-label="Gitea"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 32 32"
					class="mx-4 h-auto w-7"
					aria-hidden="true"
					fill="#fff"
				>
					<path
						d="M5.583 7.229c-2.464-0.005-5.755 1.557-5.573 5.479 0.281 6.125 6.557 6.693 9.068 6.745 0.271 1.146 3.224 5.109 5.411 5.318h9.573c5.74-0.38 10.036-17.365 6.854-17.427-5.271 0.25-8.396 0.375-11.073 0.396v5.297l-0.839-0.365-0.005-4.932c-3.073 0-5.781-0.141-10.917-0.396-0.646-0.005-1.542-0.115-2.5-0.115zM5.927 9.396h0.297c0.349 3.141 0.917 4.974 2.068 7.781-2.938-0.349-5.432-1.198-5.891-4.38-0.24-1.646 0.563-3.365 3.526-3.401zM17.339 12.479c0.198 0.005 0.406 0.042 0.594 0.13l1 0.432-0.714 1.302c-0.109 0-0.219 0.016-0.323 0.052-0.464 0.151-0.708 0.604-0.542 1.021 0.036 0.083 0.089 0.161 0.151 0.229l-1.234 2.25c-0.099 0-0.203 0.016-0.297 0.052-0.464 0.146-0.708 0.604-0.542 1.016 0.172 0.417 0.682 0.63 1.151 0.479 0.464-0.146 0.703-0.604 0.536-1.021-0.047-0.109-0.115-0.208-0.208-0.292l1.203-2.188c0.13 0.010 0.26 0 0.391-0.042 0.104-0.031 0.198-0.083 0.281-0.151 0.464 0.198 0.844 0.354 1.12 0.49 0.406 0.203 0.552 0.339 0.599 0.49 0.042 0.146-0.005 0.427-0.24 0.922-0.172 0.37-0.458 0.896-0.797 1.51-0.115 0-0.229 0.016-0.333 0.052-0.469 0.151-0.708 0.604-0.542 1.021 0.167 0.411 0.682 0.625 1.146 0.479 0.469-0.151 0.708-0.604 0.542-1.021-0.042-0.099-0.104-0.193-0.182-0.271 0.333-0.609 0.62-1.135 0.807-1.526 0.25-0.536 0.38-0.938 0.266-1.323s-0.469-0.635-0.932-0.865c-0.307-0.151-0.693-0.313-1.146-0.505 0.005-0.109-0.010-0.214-0.052-0.318s-0.109-0.198-0.193-0.281l0.703-1.281 3.901 1.682c0.703 0.307 0.995 1.057 0.651 1.682l-2.682 4.906c-0.339 0.625-1.182 0.885-1.885 0.578l-5.516-2.38c-0.703-0.307-0.995-1.057-0.656-1.682l2.682-4.906c0.234-0.432 0.708-0.688 1.208-0.708h0.083z"
					/>
				</svg>
			</a>
		</div>

		<button
			on:click={toggleMobileMenu}
			class="mr-4 md:hidden"
			aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6 text-gray-200"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d={isMobileMenuOpen
						? 'M6 18L18 6M6 6l12 12'
						: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'}
				/>
			</svg>
		</button>
	</div>

	{#if isMobileMenuOpen}
		<div
			class="absolute top-full left-0 z-10 w-full bg-[#1b1b1c] md:hidden"
			role="navigation"
			aria-label="Mobile Navigation"
			transition:slide={{ duration: 200, easing: linear }}
		>
			<a
				href="/"
				class="block px-4 py-2 text-gray-200 hover:text-blue-300"
				on:click={toggleMobileMenu}
				aria-label="Home">Home</a
			>
			<a
				href="/about"
				class="block px-4 py-2 text-gray-200 hover:text-blue-300"
				on:click={toggleMobileMenu}
				aria-label="About">About</a
			>
			<a
				href="/journal"
				class="block px-4 py-2 text-gray-200 hover:text-blue-300"
				on:click={toggleMobileMenu}
				aria-label="Journal">Journal</a
			>
			<a
				href="https://github.com/haydenhargreaves"
				target="_blank"
				class="block px-4 py-2 text-gray-200 hover:text-blue-300"
				on:click={toggleMobileMenu}
				aria-label="GitHub">GitHub</a
			>
			<a
				href="https://git.gophernest.net/azpect"
				target="_blank"
				class="block px-4 py-2 text-gray-200 hover:text-blue-300"
				on:click={toggleMobileMenu}
				aria-label="Gitea">Gitea</a
			>
		</div>
	{/if}
</nav>
