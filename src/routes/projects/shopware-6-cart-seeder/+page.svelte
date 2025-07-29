<script lang="ts">
	import { goto } from '$app/navigation';

	const codeExamples = [
		{
			title: 'Basic Usage',
			language: 'bash',
			code: `# Generate default amounts (50 customers, 100 carts)
bin/console cart-seeder:seed

# Generate custom amounts
bin/console cart-seeder:seed --customers=100 --carts=200

# Control cart contents
bin/console cart-seeder:seed --min-items=2 --max-items=10

# Clean existing test data first
bin/console cart-seeder:seed --clean`
		},
		{
			title: 'Installation via Composer',
			language: 'bash',
			code: `# Navigate to your Shopware root directory
cd /path/to/your/shopware

# Install the plugin via Composer
composer require m-a-x-s-e-e-l-i-g/shopware-6-cart-seeder

# Refresh plugin list
bin/console plugin:refresh

# Install and activate the plugin
bin/console plugin:install --activate MaxSeeligCartSeeder

# Clear cache
bin/console cache:clear`
		},
		{
			title: 'Complete Example',
			language: 'bash',
			code: `# Complete example with all options
bin/console cart-seeder:seed \\
  --customers=500 \\
  --carts=1000 \\
  --min-items=1 \\
  --max-items=8 \\
  --clean`
		}
	];
</script>

<svelte:head>
	<title>Shopware 6 Cart Seeder - Development Tool | MAXmade</title>
	<meta
		name="description"
		content="A powerful development tool for generating realistic fake customers and shopping carts in Shopware 6 with configurable options."
	/>
	<meta property="og:title" content="Shopware 6 Cart Seeder - Development Tool" />
	<meta property="og:description" content="Generate realistic test data for Shopware 6 development" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<!-- Header -->
	<header class="border-b border-gray-800 bg-black">
		<div class="mx-auto max-w-4xl px-4 py-6">
			<button
				onclick={() => goto('/#projects')}
				class="mb-4 inline-flex items-center text-gray-400 transition-colors hover:text-white"
			>
				<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Back to Projects
			</button>

			<div class="flex items-start justify-between">
				<div class="flex-1">
					<h1 class="mb-2 text-4xl font-bold">🛒 Shopware 6 Cart Seeder</h1>
					<p class="mb-4 text-xl text-gray-400">Development Tool for Realistic Test Data Generation</p>

					<div class="mb-6 flex flex-wrap gap-2">
						<span class="rounded-full bg-indigo-600 px-3 py-1 text-sm font-medium text-white"
							>PHP</span
						>
						<span class="rounded-full bg-blue-800 px-3 py-1 text-sm font-medium text-white"
							>Shopware</span
						>
						<span class="rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white"
							>Development</span
						>
						<span class="rounded-full bg-purple-500 px-3 py-1 text-sm font-medium text-white"
							>Testing</span
						>
						<span class="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white"
							>Plugin</span
						>
					</div>
				</div>

				<div class="ml-6 flex gap-3">
					<a
						href="https://github.com/m-a-x-s-e-e-l-i-g/shopware-6-cart-seeder"
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
					The Shopware 6 Cart Seeder is a powerful development tool designed exclusively for development and testing environments. 
					It generates realistic fake customers and shopping carts with configurable options, making it perfect for testing 
					cart-related functionality, abandoned cart scenarios, and performance testing.
				</p>

				<div class="grid gap-8 md:grid-cols-2">
					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Key Features</h3>
						<ul class="space-y-2 text-gray-300">
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
										clip-rule="evenodd"
									/>
								</svg>
								Realistic customer data generation
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
								Configurable cart contents
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
										clip-rule="evenodd"
									/>
								</svg>
								Aged cart simulation
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
										clip-rule="evenodd"
									/>
									<path
										fill-rule="evenodd"
										d="M4 5a2 2 0 012-2v1a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2V3a2 2 0 012-2v1a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3V5z"
										clip-rule="evenodd"
									/>
								</svg>
								Easy cleanup & batch processing
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
								Progress tracking & error handling
							</li>
							<li class="flex items-center">
								<svg class="mr-3 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M18 8a6 6 0 01-7.743 5.743L10 14l-4 4-4-4 4-4 .257.257A6 6 0 1118 8zm-6-2a1 1 0 10-2 0 1 1 0 002 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Memory efficient processing
							</li>
						</ul>
					</div>

					<div>
						<h3 class="mb-4 text-lg font-semibold text-white">Technical Stack</h3>
						<div class="mb-6 flex flex-wrap gap-2">
							<span class="rounded bg-indigo-600 px-3 py-1 text-white">PHP 8.3</span>
							<span class="rounded bg-blue-800 px-3 py-1 text-white">Shopware 6.6</span>
							<span class="rounded bg-purple-500 px-3 py-1 text-white">Faker PHP</span>
							<span class="rounded bg-gray-600 px-3 py-1 text-white">Console Commands</span>
						</div>

						<h3 class="mb-4 text-lg font-semibold text-white">Project Stats</h3>
						<div class="space-y-2 text-gray-300">
							<div class="flex items-center">
								<svg class="mr-2 h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
								1 GitHub Star
							</div>
							<div class="flex items-center">
								<svg class="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
								MIT License
							</div>
							<div class="flex items-center">
								<svg class="mr-2 h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
								Open Source
							</div>
						</div>
					</div>
				</div>

				<!-- Warning Banner -->
				<div class="mt-8 rounded-lg border border-red-500 bg-red-900/20 p-6">
					<div class="flex items-start">
						<svg class="mr-3 mt-1 h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
						<div>
							<h4 class="mb-2 font-semibold text-red-400">⚠️ Development Use Only</h4>
							<p class="text-red-300">
								This plugin is designed exclusively for development and testing environments. 
								<strong>Never use in production!</strong> It creates fake customer data and should 
								only be used in development/testing environments.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Usage Examples -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Usage Examples</h2>
			<div class="space-y-6">
				{#each codeExamples as example}
					<div class="rounded-lg border border-gray-800 bg-black">
						<div class="border-b border-gray-800 px-6 py-3">
							<h3 class="text-lg font-semibold text-white">{example.title}</h3>
						</div>
						<div class="p-6">
							<pre class="overflow-x-auto text-sm text-gray-300"><code>{example.code}</code></pre>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Features Showcase -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Core Features</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Realistic Customer Data</h3>
					<p class="text-gray-400">
						Generate customers with proper names, addresses, payment methods, and profiles using Faker library.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Smart Cart Creation</h3>
					<p class="text-gray-400">
						Create carts with random products, configurable item counts, and realistic quantities.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Aged Cart Simulation</h3>
					<p class="text-gray-400">
						Backdate carts randomly (1-7 days) to simulate realistic usage patterns for abandoned cart testing.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Easy Cleanup</h3>
					<p class="text-gray-400">
						All generated data is marked with SEED- prefixes for simple identification and removal.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Batch Processing</h3>
					<p class="text-gray-400">
						Generate hundreds or thousands of records with progress tracking and memory-efficient processing.
					</p>
				</div>

				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500">
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-lg font-semibold">Configurable Options</h3>
					<p class="text-gray-400">
						Control customer count, cart count, item quantities, and more through command-line options.
					</p>
				</div>
			</div>
		</section>

		<!-- Use Cases -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Use Cases</h2>
			<div class="grid gap-8 md:grid-cols-2">
				<div class="rounded-lg border border-gray-800 bg-black p-8">
					<h3 class="mb-4 text-lg font-semibold text-white">Development Scenarios</h3>
					<ul class="space-y-2 text-gray-300">
						<li>• Feature Testing: Test cart-related functionality with realistic data</li>
						<li>• UI/UX Testing: Populate interfaces with varied cart contents</li>
						<li>• Performance Testing: Load test shopping cart operations</li>
						<li>• Demo Preparation: Create convincing demo data for presentations</li>
					</ul>
				</div>
				<div class="rounded-lg border border-gray-800 bg-black p-8">
					<h3 class="mb-4 text-lg font-semibold text-white">Testing Scenarios</h3>
					<ul class="space-y-2 text-gray-300">
						<li>• Abandoned Cart Recovery: Test email campaigns and recovery flows</li>
						<li>• Customer Segmentation: Test customer grouping and targeting features</li>
						<li>• Checkout Flows: Test various cart configurations through checkout</li>
						<li>• Analytics: Generate data for testing reporting and analytics features</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- Command Options -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Command Options</h2>
			<div class="overflow-x-auto rounded-lg border border-gray-800 bg-black">
				<table class="w-full">
					<thead class="bg-gray-800">
						<tr>
							<th class="px-6 py-3 text-left text-sm font-semibold text-white">Option</th>
							<th class="px-6 py-3 text-left text-sm font-semibold text-white">Alias</th>
							<th class="px-6 py-3 text-left text-sm font-semibold text-white">Default</th>
							<th class="px-6 py-3 text-left text-sm font-semibold text-white">Description</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-800">
						<tr>
							<td class="px-6 py-4 text-sm text-gray-300">--customers</td>
							<td class="px-6 py-4 text-sm text-gray-300">-c</td>
							<td class="px-6 py-4 text-sm text-gray-300">50</td>
							<td class="px-6 py-4 text-sm text-gray-300">Number of fake customers to create</td>
						</tr>
						<tr>
							<td class="px-6 py-4 text-sm text-gray-300">--carts</td>
							<td class="px-6 py-4 text-sm text-gray-300">-</td>
							<td class="px-6 py-4 text-sm text-gray-300">100</td>
							<td class="px-6 py-4 text-sm text-gray-300">Number of fake carts to create</td>
						</tr>
						<tr>
							<td class="px-6 py-4 text-sm text-gray-300">--min-items</td>
							<td class="px-6 py-4 text-sm text-gray-300">-</td>
							<td class="px-6 py-4 text-sm text-gray-300">1</td>
							<td class="px-6 py-4 text-sm text-gray-300">Minimum items per cart</td>
						</tr>
						<tr>
							<td class="px-6 py-4 text-sm text-gray-300">--max-items</td>
							<td class="px-6 py-4 text-sm text-gray-300">-</td>
							<td class="px-6 py-4 text-sm text-gray-300">5</td>
							<td class="px-6 py-4 text-sm text-gray-300">Maximum items per cart</td>
						</tr>
						<tr>
							<td class="px-6 py-4 text-sm text-gray-300">--clean</td>
							<td class="px-6 py-4 text-sm text-gray-300">-</td>
							<td class="px-6 py-4 text-sm text-gray-300">false</td>
							<td class="px-6 py-4 text-sm text-gray-300">Remove existing seeded data before generating new data</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Technical Details -->
		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Technical Details</h2>
			<div class="grid gap-6 md:grid-cols-2">
				<div class="rounded-lg border border-gray-800 bg-black p-8">
					<h3 class="mb-4 text-lg font-semibold text-white">Requirements</h3>
					<ul class="space-y-2 text-gray-300">
						<li>• Shopware: 6.6.*</li>
						<li>• PHP: 8.3</li>
						<li>• Dependencies: fakerphp/faker library</li>
						<li>• Extensions: ext-json</li>
					</ul>
				</div>
				<div class="rounded-lg border border-gray-800 bg-black p-8">
					<h3 class="mb-4 text-lg font-semibold text-white">Performance Considerations</h3>
					<ul class="space-y-2 text-gray-300">
						<li>• Memory Usage: Ensure adequate PHP memory limit for large datasets</li>
						<li>• Processing Time: Scales with product catalog size</li>
						<li>• Database Load: Consider off-peak hours for very large datasets</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- Status -->
		<section>
			<h2 class="mb-6 text-2xl font-bold">Project Status</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<div class="mb-4 flex items-center">
					<div class="mr-3 h-3 w-3 rounded-full bg-green-500"></div>
					<span class="text-lg font-semibold text-green-500">Active & Available</span>
				</div>
				<p class="mb-6 text-gray-300">
					The Shopware 6 Cart Seeder is actively maintained and available via Composer. 
					It's ready to use in your Shopware 6 development environments for generating realistic test data.
				</p>

				<div class="flex gap-4">
					<a
						href="https://github.com/m-a-x-s-e-e-l-i-g/shopware-6-cart-seeder"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
					>
						View Source Code
						<svg class="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	</main>
</div>
