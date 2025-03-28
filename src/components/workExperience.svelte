<script lang="ts">
	import Work from "./work.svelte";
	import { onMount } from 'svelte';

	/**
	 * Work data interface, this will be used to store the work
	 * experience data. This is important for type checking and
	 * validation.
	 */
	interface WorkData {
		company: string;
		position: string;
		timeframe: string;
		description: string;
	}

	/**
	 * Server error interface, this will be used to store the error message if the server request fails.
	 */
	interface ServerError {
		message: string;
		code: number;
	}

	/**
	 * Path to the work data on the server.
	 */
	const workDataPath: string = '/work/data.json';

	/**
	 * Store the work data in an array of objects;
	 */
	let workExp: WorkData[] = [];

	/**
	 * Store the error message if the server request fails.
	 * Will be null if the request is successful.
	 */
	let error: ServerError | null = null;

	/**
	 * Fetch the work experience form the server.
	 */
	onMount(async() => {
		try {
			// Paths are relative to /static
			// Svelte deploys /static for me!
			const response = await fetch(workDataPath);
			if (!response.ok) {
				error = {
					message:
						'Failed to retrieve work experience data. Please try again later. If the issue persists, contact me!',
					code: response.status
				};
				return;
			}
			const data = await response.json();

			// Validate the data (Important!):
			if (Array.isArray(data)) {
				workExp = data.map((exp) => {
					// TODO: Sort the projects by date
					// This will either require a custom function or a new data system
					return {
						company: exp.company || '',
						position: exp.position || '',
						description: exp.description || '',
						timeframe: exp.timeframe || '',
					};
				});
			} else {
				error = {
					message:
						'Data was not in valid format. Please try again later. If the issue persists, contact me!',
					code: 400
				};
			}
		} catch (err) {
			error = {
				message: `${err} Please try again later. If the issue persists, contact me!`,
				code: 500
			};
		}
	});

	// If an error occurs, log it to the console
	if (error) console.error(error);
</script>

<div class="mt-24">
	<h2 class="py-2 text-xl font-semibold text-blue-300 border-b-1 border-gray-600">WORK EXPERIENCE</h2>
	{#if error}
		<p class="my-4 text-red-300 italic">
			<span class="font-semibold not-italic">Error {error.code}:</span>
			{error.message}
		</p>
	{:else}
		{#each workExp as exp}
			<Work {...exp} />
		{/each}
	{/if}
</div>
