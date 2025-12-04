<script lang="ts">
	import Link from '../../components/link.svelte';
</script>

<!-- First Row -->
<div class="w-full px-4 md:px-0">
	<div class="my-14 w-full md:w-3/4">
		<h1 class="font- font-mono text-4xl font-[900] text-gray-300 md:text-6xl">
			My name is<br />
			<span class="text-blue-300">Hayden Hargreaves.</span>
			<br />
			I like to build tools.
		</h1>
	</div>

	<!-- Column Layout for About Page -->
	<div class="flex h-fit w-full flex-col md:flex-row">
		<div class="md:w-2/3">
			<div class="h-fit w-full">
				<h2 class="py-4 text-2xl font-semibold text-blue-300">Personal Information</h2>
				<p class="w-full text-gray-200 md:w-3/4">
					My name is Hayden Hargreaves, and I am a software engineering student at
					<Link href="https://prescott.erau.edu" text="Embry Riddle Aeronautical University." />
					I am also pursing a minor in Cyber Security. I am a freshmen who intends to graduate in Spring,
					2028. I have a passion for building and seeing my ideas come to life.
				</p>
				<p class="my-4 w-full text-gray-200 md:w-3/4">
					In my free time I like to workout, play airsoft, go mountain biking, and play video games.
					I have been playing airsoft for nearly two years and have loved it from day one! I own
					countless airsoft guns which include an
					<span class="text-blue-300">Elite Force H&amp;K 416 A5</span>, an
					<span class="text-blue-300"> Elite Force 1911 TAC</span>, a
					<span class="text-blue-300">JAG Arms Scattergun Super CQB</span>, and many more.
				</p>
				<p class="w-full text-gray-200 md:w-3/4">
					Back at home, I have a dog named <span class="text-blue-300">Penny</span> who is a mini golden-doodle.
					She was named after the character Penny from the show "The Big Bang Theory". She is a very
					energetic dog who loves to play and run around. She will be five years old this July!
				</p>

				<div class="my-4 w-full justify-center md:w-3/4">
					<img
						class="h-fit w-full md:w-2/3"
						src="/pennyBowBG.png"
						alt="My dog penny with a christmas bow on her head."
					/>
				</div>
			</div>

			<!-- Experience -->
			<div class="my-8 h-fit w-full">
				<h2 class="py-4 text-2xl font-semibold text-blue-300">Experience</h2>
				<p class="mb-4 w-full text-gray-200 md:w-3/4">
					I have been programming for nearly <span class="text-blue-300">half a decade</span>. I
					started programming in high school where I learned web development using HTML, CSS, and
					some basic JavaScript. From there, I started to learn software development basics using
					<span class="text-blue-300">Java</span>. Since then I have learned to love
					<Link href="https://go.dev" text="Go" /> and have dipped my feet into the water of countless
					programming languages.
				</p>
				<p class="mb-4 w-full text-gray-200 md:w-3/4">
					In the past three years, I have moved from using Window to
					<span class="text-blue-300">Linux</span>
					exclusively. I have used countless distributions ranging from Ubuntu to Arch Linux, but I have
					settled on <span class="text-blue-300">NixOS</span> as my daily driver. During this
					journey I developed a "need for speed" and this led to me to
					<span class="text-blue-300">Neovim</span>. Inspired by
					<Link
						text="The Primeagen"
						href="https://x.com/ThePrimeagen?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
					/>, I have discovered a love for software toolchain development and have been building
					many small Neovim plugins to help my day-to-day life as a developer.
				</p>
				<p class="mb-4 w-full text-gray-200 md:w-3/4">
					Since early 2025 I have been employed as a <span class="text-blue-300"
						>Full Stack Software Engineer</span
					>
					at Poppin' Jobs. Poppin' Jobs is a startup building a platform for young job-seekers with little
					to no experience to find jobs. Through this opportunity I have learned how to build robust,
					reliable web services using <span class="text-blue-300">C# and DOTNET</span>. I have also
					been able to get hands on experience working on large scale front end web applications
					written in React. I have also had a chance to work on load testing and data generation
					using
					<span class="text-blue-300">Grafana's K6</span>.
				</p>
				<p class="mb-4 w-full text-gray-200 md:w-3/4">
					I have been employed as a Staff Accountant at
					<span class="text-blue-300">Bottom Line Business Solutions (BLBS)</span> since 2020. In
					2023, following a hack at the previous data hosting company, I was tasked with developing
					a new data hosting solution. I developed a custom solution using Go and it is hosted on a
					Linux server on site. Implementing a strong partial and complete backup system and
					<Link
						text="RAID 10"
						href="https://www.techtarget.com/searchstorage/definition/RAID-10-redundant-array-of-independent-disks"
					/>
					storage, I was able to ensure that the data is safe and secure. This solution has been in use
					since 2024 and has been a great success.
				</p>
				<p class="mb-4 w-full text-gray-200 md:w-3/4">
					While working on the data hosting solution, I developed an interest in server management
					and have since been managing the BLBS server, as well as my own <span
						class="text-blue-300"
					>
						personal server</span
					>. Both servers run Ubuntu Server and can be accessed remotely and securely using SSH
					keys. This has been a great learning experience and has helped me develop a strong
					understanding of server management and the Linux kernel.
				</p>
				<p class="mb-4 w-full text-gray-200 md:w-3/4">
					In September of 2023, I was hired by the <span class="text-blue-300">
						Backcountry Horsemen of California
					</span>
					to rebuild their website. They wanted it to be modeled after their previous site from the 90's.
					I developed the site using raw HTML and TailwindCSS because there was no need for anything
					fancy for a static website. Plus, I did not have access to their server, just an FTP portal
					to upload the files. The website was complete in April of 2024 and has since been in use. This
					opportunity was a great learning experience and helped me realize that I do not want to be
					a front-end web developer.
				</p>
				<p class="mb-4 w-full text-gray-200 md:w-3/4">
					My most recent endeavor is a research project sponsored by Embry Riddle. I am working with
					<Link href="https://faculty.erau.edu/Seth.McNeill" text="Dr. Seth McNeill" />
					to create an <span class="text-blue-300">Acoustic Drone Detection Sensor Network</span>.
					We are able to detect drones with just sound having a nearly 95% accuracy rate. My portion
					of this project is the network infrastructure. I have developed an
					<span class="text-blue-300"> Internet of Things (IoT)</span> network that connects all of the
					sensors between a gateway. Any data collected by the sensors is sent to AWS where it is processed
					and then stored locally on a server. This project has been an amazing experience and has helped
					me to develop a strong understanding of IoT networks and the AWS ecosystem. Furthermore, it
					has opened my eyes to the world of research and has introduced me to many bright individuals.
				</p>
			</div>
		</div>

		<!-- Right Column -->
		<div class="mt-12 md:mt-0 md:w-1/3">
			<div class="w-full">
				<!-- Education Section -->
				<h2 class="py-2 text-xl font-semibold text-blue-300">EDUCATION</h2>
				<div class="mb-4">
					<h3 class="text-sm font-semibold text-gray-200">
						Embry Riddle Aeronautical University - 2028
					</h3>
					<p class="py text-xs text-gray-200">
						Bachelor of Science in Software Engineering with minor in Cyber Intelligence and
						Security (4.00 GPA)
					</p>
				</div>
				<div class="my-4">
					<h3 class="text-sm font-semibold text-gray-200">West-MEC Central Campus - 2024</h3>
					<p class="py text-xs text-gray-200">Coding &amp; Programming (4.00 GPA)</p>
				</div>
				<div class="my-4">
					<h3 class="text-sm font-semibold text-gray-200">Paradise Honors High School - 2024</h3>
					<p class="py text-xs text-gray-200">Honors Student, 13 out of 213 (4.51 WGPA)</p>
				</div>

				<!-- Contact Info Section -->
				<h2 class="mt-14 py-2 text-xl font-semibold text-blue-300">CONTACTS</h2>
				<div class="mb-4">
					<h3 class="text-sm font-semibold text-gray-200">Email</h3>
					<a href="mailto:hayden@gophernest.net"
						><p class="py text-xs text-gray-200">hayden@gophernest.net</p></a
					>
				</div>
				<div class="my-4">
					<h3 class="text-sm font-semibold text-gray-200">Phone</h3>
					<a href="tel:6232370838"><p class="py text-xs text-gray-200">(623) 237-0838</p></a>
				</div>
				<div class="my-4">
					<h3 class="text-sm font-semibold text-gray-200">Location</h3>
					<p class="py text-xs text-gray-200">Prescott, AZ</p>
				</div>
				<div class="my-4">
					<h3 class="text-sm font-semibold text-gray-200">LinkedIn</h3>
					<a href="https://www.linkedin.com/in/haydenhargreaves/" target="_blank"
						><p class="py text-xs text-gray-200">Hayden Hargreaves</p></a
					>
				</div>
				<div class="my-4">
					<h3 class="text-sm font-semibold text-gray-200">GitHub</h3>
					<a href="https://github.com/haydenhargreaves" target="_blank"
						><p class="py text-xs text-gray-200">haydenhargreaves</p></a
					>
				</div>
			</div>
			<div class="my-4">
				<h3 class="text-sm font-semibold text-gray-200">Gitea</h3>
				<a href="https://git.gophernest.net/azpect" target="_blank"
					><p class="py text-xs text-gray-200">git.gophernest.net</p></a
				>
			</div>
		</div>
	</div>
</div>
