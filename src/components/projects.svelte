<script lang="ts">
	import { onMount } from 'svelte';
	import Project from './project.svelte';

	/**
	 * Project data interface, this will be used to store the project data.
	 * This is important for type checking and validation.
	 */
	interface ProjectData {
		title: string;
		description: string;
		date: string;
		stack: string[];
		image: string | null;
		imageAlt: string | null;
		link: string | null;
	}

	/**
	 * Server error interface, this will be used to store the error message if the server request fails.
	 */
	interface ServerError {
		message: string;
		code: number;
	}

	/**
	 * Path to the project data on the server.
	 */
	const projectsDataPath: string = '/projects/data.json';

	/**
	 * Store the project data in an array of objects.
	 */
	let projects: ProjectData[] = [];

	/**
	 * Store the error message if the server request fails.
	 * Will be null if the request is successful.
	 */
	let error: ServerError | null = null;

	/**
	 * Fetch the project data from the server.
	 */
	onMount(async () => {
		try {
			// Paths are relative to /static
			// Svelte deploys /static for me!
			const response = await fetch(projectsDataPath);
			if (!response.ok) {
				error = {
					message:
						'Failed to retrieve project data. Please try again later. If the issue persists, contact me!',
					code: response.status
				};
				return;
			}
			const data = await response.json();

			// Validate the data (Important!):
			if (Array.isArray(data)) {
				projects = data.map((project) => {
					// TODO: Sort the projects by date
					// This will either require a custom function or a new data system
					return {
						title: project.title || '',
						description: project.description || '',
						date: project.date || '',
						stack: project.stack || '',
						image: project.image || '',
						imageAlt: project.imageAlt || '',
						link: project.link || ''
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

<div class="">
	<h2 class="py-2 text-xl font-semibold text-blue-300">PROJECTS</h2>
	{#if error}
		<p class="my-4 text-red-300 italic">
			<span class="font-semibold not-italic">Error {error.code}:</span>
			{error.message}
		</p>
	{:else}
		{#each projects as project}
			<Project {...project} />
		{/each}
	{/if}
</div>
