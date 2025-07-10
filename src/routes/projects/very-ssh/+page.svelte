<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Very SSH - Minimal SSH Launcher | MAXmade</title>
	<meta name="description" content="Minimal, fast GUI application for quickly launching SSH sessions from your ~/.ssh/config." />
	<meta property="og:title" content="Very SSH - Minimal SSH Launcher" />
	<meta property="og:description" content="Minimal, fast GUI application for quickly launching SSH sessions from your ~/.ssh/config." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<!-- Header -->
	<header class="border-b border-gray-800 bg-black">
		<div class="mx-auto max-w-4xl px-4 py-6">
			<button
				on:click={() => goto('/#projects')}
				class="mb-4 inline-flex items-center text-gray-400 transition-colors hover:text-white"
			>
				<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Back to Projects
			</button>

			<div class="flex items-start justify-between">
				<div class="flex-1">
					<h1 class="mb-2 text-4xl font-bold">Very SSH</h1>
					<p class="mb-4 text-xl text-gray-400">Minimal, Fast SSH Launcher for Power Users</p>

					<div class="mb-6 flex flex-wrap gap-2">
						<span class="rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white">Python</span>
						<span class="rounded-full bg-cyan-500 px-3 py-1 text-sm font-medium text-white">GUI</span>
					</div>
				</div>

				<div class="ml-6 flex gap-3">
					<a
						href="https://github.com/m-a-x-s-e-e-l-i-g/very-ssh"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
					>
						View Code
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- Content -->
	<main class="mx-auto max-w-4xl px-4 py-12">
		<!-- Project Overview -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Project Overview</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<p class="mb-6 text-lg leading-relaxed text-gray-300">
					Very SSH is a minimal, fast GUI application for quickly launching SSH sessions from your <code>~/.ssh/config</code>. Designed for power users and developers, it provides a simple interface to select and connect to your SSH hosts without typing commands.
				</p>
				<ul class="space-y-2 text-gray-300">
					<li>• Reads and parses your <code>~/.ssh/config</code> file</li>
					<li>• Instant search and filter for hosts</li>
					<li>• One-click SSH session launch</li>
					<li>• Minimal, distraction-free interface</li>
					<li>• Cross-platform (Python, Tkinter)</li>
				</ul>
			</div>
		</section>

		<!-- Technical Details -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Technical Details</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<div class="mb-4">
					<h3 class="mb-2 text-lg font-semibold text-white">Technologies Used</h3>
					<div class="flex flex-wrap gap-2">
						<span class="rounded bg-green-500 px-3 py-1 text-white">Python</span>
						<span class="rounded bg-cyan-500 px-3 py-1 text-white">Tkinter</span>
					</div>
				</div>
				<div>
					<h3 class="mb-2 text-lg font-semibold text-white">Key Features</h3>
					<ul class="space-y-1 text-sm text-gray-300">
						<li>• Parses SSH config for host entries</li>
						<li>• Fast fuzzy search for hostnames</li>
						<li>• Launches SSH in your default terminal</li>
						<li>• Lightweight and portable</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- Project Status -->
		<section>
			<h2 class="mb-6 text-2xl font-bold">Project Status</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<div class="mb-4 flex items-center">
					<div class="mr-3 h-3 w-3 rounded-full bg-green-500"></div>
					<span class="text-lg font-semibold text-green-500">Active & Open Source</span>
				</div>
				<p class="mb-6 text-gray-300">
					Very SSH is actively maintained and available as open source. Contributions and feedback are welcome!
				</p>
				<a
					href="https://github.com/m-a-x-s-e-e-l-i-g/very-ssh"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
				>
					View Source Code
					<svg class="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
					</svg>
				</a>
			</div>
		</section>
	</main>
</div>
