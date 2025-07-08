<section id="about" class="relative overflow-hidden bg-black py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section header -->
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white sm:text-5xl">About Me</h2>
			<div class="mx-auto h-1 w-24 bg-white"></div>
		</div>

		<!-- Main content -->
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Text content -->
			<div class="space-y-8">
				<div class="text-xl leading-relaxed text-gray-300">
					<p class="mb-6">
						I'm <span class="font-semibold text-white">Max</span> — a web developer, creator, and parkour
						athlete from Bergen op Zoom 🇳🇱.
					</p>
					<p class="mb-6">
						I spend most of my time building digital tools, coding ideas into reality, and enjoying
						life offline through parkour, photography, and creative side projects under the name <span
							class="font-semibold text-white">MAXmade</span
						>.
					</p>
					<p class="text-gray-400">
						I like to keep things simple, fast, and fun — whether it's in code or daily life.
					</p>
				</div>

				<!-- Hand-drawn signature -->
				<div class="ml-2 inline-block">
					<img
						src="images/signature-max.svg"
						alt="Max's Signature"
						class="signature mx-auto h-auto w-24"
					/>
				</div>
			</div>

			<!-- Parkour video -->
			<div class="relative">
				<div class="relative overflow-hidden rounded-lg shadow-2xl">
					<video autoplay muted loop playsinline class="h-full w-full object-cover">
						<source src="/video/parkour.mp4" type="video/mp4" />
					</video>
				</div>

				<!-- Floating elements for visual interest -->
				<div
					class="absolute -top-4 -right-4 h-8 w-8 animate-pulse rounded-full border-2 border-white/20"
				></div>
				<div
					class="absolute -bottom-4 -left-4 h-6 w-6 animate-bounce rounded-full bg-white/10"
					style="animation-delay: 0.5s"
				></div>
			</div>
		</div>
	</div>

	<!-- Background pattern -->
	<div class="pointer-events-none absolute inset-0 opacity-5">
		<div
			class="absolute inset-0"
			style="background-image: radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px); background-size: 40px 40px;"
		></div>
	</div>
</section>
