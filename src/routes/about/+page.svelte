<script lang="ts">
</script>

<main class="flex h-fit flex-col items-center">
	<!-- First Row -->
	<div class="w-3/4">
		<!-- My Name Section -->
		<div class="w-3/4">
			<h1 class="py-20 font-mono text-6xl font-[600] text-gray-300">
				My name is<br />
				<span class="text-blue-300">Hayden Hargreaves.</span>
				<br />
				I like to build tools.
			</h1>
		</div>

		<!-- Column Layout for About Page -->
		<div class="flex h-fit w-full">
			<!-- Left Column -->
			<div class="h-full w-2/3">
				<!-- Personal Information -->
				<div class="h-fit w-full">
					<h2 class="py-4 text-2xl font-[600] text-blue-300">Personal Information</h2>
					<p class="w-3/4 text-gray-200">
						My name is Hayden Hargreaves, and I am a software engineering student at <span
							class="text-blue-300"
						>
							Embry Riddle Aeronautical University.</span
						>
						I am also pursing a minor in Cyber Security. I am a freshmen who intends to graduate in Spring,
						2028. I have a passion for building things and seeing my ideas come to life.
						<br />
						<br />
						In my free time, when I am not coding, I like to workout, I play airsoft, I love mountain
						biking, and I play video games when I need to relax. I have been playing airsoft for nearly
						two years and have loved it from day one! I own countless airsoft guns which include an
						<span class="text-blue-300">Elite Force H&amp;K 416 A5</span>, an
						<span class="text-blue-300"> Elite Force 1911 TAC</span>,
						<span class="text-blue-300">JAG Arms Scattergun Super CQB</span>, and many more.
						<br />
						<br />
						Back at home, I have a dog named <span class="text-blue-300">Penny</span> who is a mini golden-doodle.
						She was named after the character Penny from the show "The Big Bang Theory". She is a very
						energetic dog who loves to play and run around. She will be five years old this July!
					</p>

					<div class="my-4 flex w-3/4 justify-center">
						<img
							class="h-fit w-2/3"
							src="/pennyBowBG.png"
							alt="My dog penny with a christmas bow on her head."
						/>
					</div>
				</div>

				<!-- Experience -->
				<div class="my-8 h-fit w-full">
					<h2 class="py-4 text-2xl font-[600] text-blue-300">Experience</h2>
					<p class="mb-4 w-3/4 text-gray-200">
						I have been programming for nearly <span class="text-blue-300">half a decade</span> now.
						I started programming in high school where I learned web development using HTML, CSS,
						and some basic JavaScript. From there, I started to learn software development basics
						using <span class="text-blue-300">Java</span>. Since then, I have learned to love
						<span class="text-blue-300">Go</span> and have dipped my feet into the water of countless
						programming languages.
					</p>
					<p class="my-4 w-3/4 text-gray-200">
						In the past three years, I have moved from using Window to
						<span class="text-blue-300">Linux</span>
						exclusively. I have used countless distributions ranging from Ubuntu to Arch Linux, but I
						have settled on <span class="text-blue-300">NixOS</span> as my daily driver. During this
						journey I developed a "need for speed" and this lead to me to
						<span class="text-blue-300">Neovim</span>. Inspired by
						<a
							href="https://x.com/ThePrimeagen?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
							target="_blank"
							class="transition-color underline duration-150 hover:text-blue-300">The Primeagen</a
						>, I have developed a love for developer toolchain development and have been building
						many small Neovim plugins to help me in my day-to-day life as a developer.
					</p>
					<p class="w-3/4 text-gray-200">
						I have been employed as a Staff Accountant at
						<span class="text-blue-300">Bottom Line Business Solutions</span> since 2020. In 2023,
						following a hack at the previous data hosting company, I was tasked with developing a
						new data hosting solution. I developed a custom solution using Go and host it on an on
						site Linux server. Implementing a strong partial and complete backup system and
						<a
							href="https://www.techtarget.com/searchstorage/definition/RAID-10-redundant-array-of-independent-disks"
							target="_blank"
							class="transition-color underline duration-150 hover:text-blue-300">RAID 10</a
						>
						storage, I was able to ensure that the data is safe and secure. This solution has been in
						use since 2024 and has been a great success.
					</p>
					<p class="my-4 w-3/4 text-gray-200">
						While working on the data hosting solution, I developed an interest in server management
						and have since been managing the company's server, as well as my own <span
							class="text-blue-300"
						>
							personal server</span
						>. Both servers run Ubuntu Server and can be accessed remotely and securely using SSH
						keys. This has been a great learning experience and has helped me to develop a strong
						understanding of server management and the Linux kernel.
					</p>
					<p class="my-4 w-3/4 text-gray-200">
						In September of 2023, I was hired by the <span class="text-blue-300">
							Backcountry Horsemen of California
						</span>
						to rebuild their website. They wanted a website that was modeled after their previous site
						from the 90's. I developed a new website using raw HTML and TailwindCSS because there was
						no need for anything fancy for a static website. Plus, I did not have access to their server,
						just an FTP portal to upload the files. The website was complete in April of 2024 and has
						since been in use. This opportunity was a great learning experience and helped me to realize
						that I do not want to be a front-end web developer.
					</p>
					<p class="my-4 w-3/4 text-gray-200">
						My most recent endeavor is a research project sponsored by Embry Riddle. I am working
						with
						<a
							href="https://faculty.erau.edu/Seth.McNeill"
							class="transition-color underline duration-150 hover:text-blue-300"
							target="_blank">Dr. McNeill</a
						>
						to create an <span class="text-blue-300">Acoustic Drone Detection Sensor Network</span>.
						Using just sound, we are able to detect drones with a nearly 95% accuracy rate. My
						portion of this project is the network infrastructure. I have developed an
						<span class="text-blue-300"> Internet of Things (IoT)</span> network that connects all of
						the sensors between a gateway. Any data collected by the sensors is sent to AWS where it
						is processed and then stored locally on a server. This project has been an amazing experience
						and has helped me to develop a strong understanding of IoT networks and the AWS ecosystem.
						Furthermore, it has opened my eyes to the world of research and brought me close to many
						amazing people.
					</p>
				</div>
			</div>

			<!-- Right Column -->
			<div class="h-full w-1/3">
				<div class="h-24 w-full border-1 border-red-500"></div>
			</div>
		</div>
	</div>
</main>
