<script lang="ts">
	interface SkillData {
		title: string;
		rating: number;
		description: string;
	}

	const includeDescription: boolean = true;

	const skills: SkillData[] = [
		{
			title: 'Javascript',
			description: 'Frontend web development and basic backend development using Node.js.',
			rating: 3
		},
		{
			title: 'Typescript',
			description: 'Javascript with static typing and additional features.',
			rating: 3
		},
		{
			title: 'Python',
			description: 'Dynamic language used for data analysis and machine learning.',
			rating: 4
		},
		{
			title: 'Go',
			description: 'All purpose language for backend web development and systems programming.',
			rating: 5
		},
		{
			title: 'Lua',
			description: 'Simple configuration language used for Neovim and other applications.',
			rating: 2
		},
		{
			title: 'SQL',
			description:
				'Database query language used for data storage and retrieval in relational databases.',
			rating: 3
		},
		{
			title: 'C',
			description:
				'Low level systems programming language used for operating systems and embedded systems.',
			rating: 3
		},
		{
			title: 'C++',
			description:
				'Object oriented programming language used for game development and systems programming.',
			rating: 2
		},
		{
			title: 'HTML & CSS',
			description: 'Web markup and styling languages used for frontend web development.',
			rating: 5
		},
		{
			title: 'Zig',
			description: 'Systems programming language with a focus on safety and performance.',
			rating: 2
		},
		{
			title: 'Nix',
			description: 'Functional package manager used for declarative system configuration.',
			rating: 4
		},
		{
			title: 'Java',
			description: 'Object oriented programming language used for development on all platforms.',
			rating: 3
		}
	];

	const tools: string[] = [
		'Linux',
		'NixOS',
		'Tailwind CSS',
		'Spring Boot',
		'Git',
		'Docker',
		'HTMX',
		'Nginx',
		'Gin Web Framework',
		'SSH',
		'PostgreSLQ',
		'Neovim'
	];

	skills.sort((a, b) => b.rating - a.rating);
</script>

<div class="w-7/10">
	<h2 class="py-2 text-xl font-semibold text-blue-300">SKILLSET</h2>
	{#each skills as skill}
		<div class="group items-center py-2">
			<div class="flex items-center">
				<h3 class="text-sm font-semibold text-gray-200">{skill.title}</h3>
				<div class="mx-2 flex w-fit">
					{#if skill.rating > 0}
						{#each { length: skill.rating }}
							<svg
								height="10px"
								width="10px"
								version="1.1"
								id="Capa_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 53.867 53.867"
								xml:space="preserve"
								fill="#000000"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
								<g id="SVGRepo_iconCarrier">
									<polygon
										style="fill:#8EC5FF;"
										points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
									></polygon>
								</g>
							</svg>
						{/each}
						{#each { length: 5 - skill.rating }}
							<svg
								height="10px"
								width="10px"
								version="1.1"
								id="Capa_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 53.867 53.867"
								xml:space="preserve"
								fill="#000000"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
								<g id="SVGRepo_iconCarrier">
									<polygon
										style="fill:#E5E7EB;"
										points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
									></polygon>
								</g>
							</svg>
						{/each}
					{/if}
				</div>
			</div>
			<p
				class="py h-0 text-xs whitespace-nowrap text-gray-200 opacity-0 transition-[height] transition-opacity duration-300 group-hover:opacity-100"
			>
				{skill.description}
			</p>
		</div>
	{/each}
</div>
<div class="my-4 w-7/10">
	<h2 class="py-2 text-xl font-semibold text-blue-300">TOOLS &amp; FRAMEWORKS</h2>

	{#each tools as tool}
		<div class="my-2 flex items-center">
			<h3 class="text-sm font-semibold text-gray-200">{tool}</h3>
		</div>
	{/each}
</div>
