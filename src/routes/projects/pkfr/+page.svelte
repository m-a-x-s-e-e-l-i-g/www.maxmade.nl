<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>PKFR.nl - Dutch Parkour Community Hub | MAXmade</title>
	<meta name="description" content="PKFR.nl is the central hub for the Dutch parkour and freerunning community, featuring spot guides, open gym schedules, and community connections." />
	<meta property="og:title" content="PKFR.nl - Dutch Parkour Community Hub" />
	<meta property="og:description" content="The spot for the Dutch parkour and freerunning scene" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-white mt-20">
	<!-- Header -->
	<header class="bg-black border-b border-gray-800">
		<div class="max-w-4xl mx-auto px-4 py-6">
			<button 
				onclick={() => goto('/#projects')}
				class="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4"
			>
				<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Back to Projects
			</button>
			
			<div class="flex items-start justify-between">
				<div class="flex-1">
					<h1 class="text-4xl font-bold mb-2">PKFR.nl</h1>
					<p class="text-xl text-gray-400 mb-4">Nederlandse Parkour & Freerunning Community Hub</p>
					
					<div class="flex flex-wrap gap-2 mb-6">
						<span class="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">Svelte</span>
						<span class="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">Community</span>
						<span class="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">Netherlands</span>
						<span class="px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full">Parkour</span>
						<span class="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">Freerunning</span>
					</div>
				</div>
				
				<div class="flex gap-3 ml-6">
					<a 
						href="https://www.pkfr.nl" 
						target="_blank" 
						rel="noopener noreferrer"
						class="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
					>
						Visit Website
					</a>
					<a 
						href="https://github.com/m-a-x-s-e-e-l-i-g/pkfr-nl" 
						target="_blank" 
						rel="noopener noreferrer"
						class="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
					>
						View Code
					</a>
				</div>
			</div>
		</div>
	</header>

	<!-- Content -->
	<main class="max-w-4xl mx-auto px-4 py-12">
		<!-- Project Overview -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Project Overview</h2>
			<div class="bg-black rounded-lg border border-gray-800 p-8">
				<p class="text-lg text-gray-300 leading-relaxed mb-6">
					PKFR.nl serves as the central hub for the Dutch parkour and freerunning community. The platform brings together all essential information about the sport in the Netherlands, including training locations, events, and community connections, making it easier for practitioners to find places to train and connect with others.
				</p>
				
				<div class="grid md:grid-cols-2 gap-8">
					<div>
						<h3 class="text-lg font-semibold mb-4 text-white">Key Features</h3>
						<ul class="space-y-2 text-gray-300">
							<li class="flex items-center">
								<svg class="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
								</svg>
								Comprehensive spot database
							</li>
							<li class="flex items-center">
								<svg class="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
								</svg>
								Open gym schedules
							</li>
							<li class="flex items-center">
								<svg class="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
								</svg>
								Community connections
							</li>
							<li class="flex items-center">
								<svg class="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
								</svg>
								Event listings & jams
							</li>
							<li class="flex items-center">
								<svg class="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
								</svg>
								Gym finder tool
							</li>
							<li class="flex items-center">
								<svg class="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
								</svg>
								WhatsApp community integration
							</li>
						</ul>
					</div>
					
					<div>
						<h3 class="text-lg font-semibold mb-4 text-white">Technical Stack</h3>
						<div class="flex flex-wrap gap-2 mb-6">
							<span class="px-3 py-1 bg-orange-500 text-white rounded">Svelte</span>
							<span class="px-3 py-1 bg-blue-500 text-white rounded">SvelteKit</span>
							<span class="px-3 py-1 bg-purple-500 text-white rounded">TypeScript</span>
							<span class="px-3 py-1 bg-green-500 text-white rounded">TailwindCSS</span>
						</div>
						
						<h3 class="text-lg font-semibold mb-4 text-white">Project Stats</h3>
						<div class="space-y-2 text-gray-300">
							<div class="flex items-center">
								<svg class="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								1 GitHub Star
							</div>
							<div class="flex items-center">
								<svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
								GPL-3.0 License
							</div>
							<div class="flex items-center">
								<svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
								</svg>
								Open Source
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Features Showcase -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Platform Features</h2>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="bg-black rounded-lg border border-gray-800 p-6">
					<div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold mb-2">Training Spots</h3>
					<p class="text-gray-400">Comprehensive database of parkour spots across the Netherlands with detailed information and photos.</p>
				</div>
				
				<div class="bg-black rounded-lg border border-gray-800 p-6">
					<div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold mb-2">Open Gyms</h3>
					<p class="text-gray-400">Up-to-date schedules of open gym sessions at parkour gyms throughout the country.</p>
				</div>
				
				<div class="bg-black rounded-lg border border-gray-800 p-6">
					<div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold mb-2">Community Hub</h3>
					<p class="text-gray-400">Central place for community links, WhatsApp groups, and connecting with other traceurs.</p>
				</div>
				
				<div class="bg-black rounded-lg border border-gray-800 p-6">
					<div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 013 15.546V6.454a1.5 1.5 0 01.954-1.392l2.49-.664a11.21 11.21 0 016.11 0l2.49.664A1.5 1.5 0 0118 6.454v9.092z" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold mb-2">Events & Jams</h3>
					<p class="text-gray-400">Stay updated on upcoming parkour jams, competitions, and community events.</p>
				</div>
				
				<div class="bg-black rounded-lg border border-gray-800 p-6">
					<div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold mb-2">Gym Finder</h3>
					<p class="text-gray-400">Easily find parkour gyms and training facilities near you with location-based search.</p>
				</div>
				
				<div class="bg-black rounded-lg border border-gray-800 p-6">
					<div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
						</svg>
					</div>
					<h3 class="text-lg font-semibold mb-2">Useful Tools</h3>
					<p class="text-gray-400">Collection of helpful utilities and resources for the parkour community.</p>
				</div>
			</div>
		</section>

		<!-- Impact & Community -->
		<section class="mb-12">
			<h2 class="text-2xl font-bold mb-6">Community Impact</h2>
			<div class="bg-black rounded-lg border border-gray-800 p-8">
				<div class="grid md:grid-cols-2 gap-8">
					<div>
						<h3 class="text-lg font-semibold mb-4 text-white">Purpose</h3>
						<p class="text-gray-300 leading-relaxed">
							PKFR.nl was created to centralize all parkour and freerunning information in the Netherlands. Before this platform, finding training spots, open gym schedules, and community connections required checking multiple sources and platforms.
						</p>
					</div>
					<div>
						<h3 class="text-lg font-semibold mb-4 text-white">Community Benefits</h3>
						<ul class="space-y-2 text-gray-300">
							<li>• Easier discovery of training locations</li>
							<li>• Centralized event information</li>
							<li>• Stronger community connections</li>
							<li>• Better accessibility for newcomers</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- Status -->
		<section>
			<h2 class="text-2xl font-bold mb-6">Project Status</h2>
			<div class="bg-black rounded-lg border border-gray-800 p-8">
				<div class="flex items-center mb-4">
					<div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
					<span class="text-lg font-semibold text-green-500">Live & Maintained</span>
				</div>
				<p class="text-gray-300 mb-6">
					PKFR.nl is actively maintained and regularly updated with new spots, events, and community information. The platform continues to serve the Dutch parkour community as their central information hub.
				</p>
				
				<div class="flex gap-4">
					<a 
						href="https://www.pkfr.nl" 
						target="_blank" 
						rel="noopener noreferrer"
						class="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
					>
						Visit PKFR.nl
						<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
					<a 
						href="https://github.com/m-a-x-s-e-e-l-i-g/pkfr-nl" 
						target="_blank" 
						rel="noopener noreferrer"
						class="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
					>
						View Source Code
						<svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	</main>
</div>
