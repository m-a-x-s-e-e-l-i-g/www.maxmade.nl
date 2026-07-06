<script lang="ts">
	import ProjectHeader from '$lib/components/projects/ProjectHeader.svelte';
	import ProjectOverview from '$lib/components/projects/ProjectOverview.svelte';

	type PillColor = 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray';

	const tags: Array<{ label: string; color: PillColor }> = [
		{ label: 'Svelte', color: 'orange' },
		{ label: 'Python', color: 'green' },
		{ label: 'ClickHouse', color: 'blue' },
		{ label: 'Docker Compose', color: 'gray' },
		{ label: 'Email Security', color: 'pink' }
	];

	const overviewDescription =
		'DMARC-hark helps email and operations teams find DMARC risk quickly, investigate one domain deeply, and keep report ingestion running smoothly. It is built for day-to-day monitoring and incident response: fast overview first, then clear drill-down when something looks wrong.';

	const highlights = [
		'Fleet-level DMARC risk overview across all monitored domains',
		'Single-domain investigation with pass/fail, sources, and failure trends',
		'Practical guidance to prioritize risky sources and remediation',
		'Live ingest status and run history for mailbox processing visibility',
		'Docker Compose stack for quick setup and reproducible operations'
	];

	const stack: Array<{ label: string; color: PillColor }> = [
		{ label: 'Svelte', color: 'orange' },
		{ label: 'Python API', color: 'green' },
		{ label: 'ClickHouse', color: 'blue' },
		{ label: 'Docker Compose', color: 'gray' },
		{ label: 'Nginx', color: 'emerald' }
	];

	const status = ['Active & Open Source', 'MIT Licensed', 'Built for Operator Workflows'];

	const quickStartCommands = `# Windows PowerShell
Copy-Item docker.env.example docker.env

# Edit docker.env and set at least:
# IMAP_HOST
# IMAP_USER
# IMAP_PASS

docker compose --env-file docker.env up --build -d

# Dashboard: http://localhost:18080
# API: http://localhost:15000`;

	const apiEndpoints: Array<{ method: string; path: string; description: string }> = [
		{ method: 'GET', path: '/overview', description: 'Fleet-level risk overview across domains' },
		{ method: 'GET', path: '/domain/<domain>/summary', description: 'Pass/fail, alignment, and policy coverage' },
		{ method: 'GET', path: '/domain/<domain>/sources', description: 'Sending sources with per-source stats' },
		{ method: 'GET', path: '/domain/<domain>/failures', description: 'Failure records, newest first' },
		{ method: 'GET', path: '/domain/<domain>/trend', description: 'Daily fail/total trend for charting' },
		{ method: 'GET', path: '/ingest/status', description: 'Current ingest state and recent run history' }
	];
</script>

<svelte:head>
	<title>DMARC-hark - DMARC Monitoring Workspace | MAXmade</title>
	<meta
		name="description"
		content="DMARC-hark is an operations-focused DMARC monitoring workspace for cross-domain risk visibility, domain investigation, and ingest observability."
	/>
	<meta property="og:title" content="DMARC-hark - DMARC Monitoring Workspace" />
	<meta
		property="og:description"
		content="Cross-domain DMARC risk visibility, domain drill-down, and live ingest monitoring for email and operations teams."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mt-20 min-h-screen bg-gray-900 text-white">
	<ProjectHeader
		title="DMARC-hark"
		subtitle="Operations Workspace for DMARC Monitoring and Incident Response"
		tags={tags}
		codeUrl="https://github.com/m-a-x-s-e-e-l-i-g/DMARC-hark"
		backHref="/#projects"
	/>

	<main class="mx-auto max-w-4xl px-4 py-12">
		<ProjectOverview
			description={overviewDescription}
			highlights={highlights}
			stack={stack}
			status={status}
		/>

		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Workspace Preview</h2>
			<div class="overflow-hidden rounded-lg border border-gray-800 bg-black">
				<img
					src="https://raw.githubusercontent.com/m-a-x-s-e-e-l-i-g/DMARC-hark/main/docs/screenshots/1.jpg"
					alt="DMARC-hark dashboard overview"
					class="w-full object-cover"
					loading="lazy"
				/>
			</div>
		</section>

		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Why Teams Use It</h2>
			<div class="grid gap-6 md:grid-cols-3">
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<h3 class="mb-2 text-lg font-semibold text-white">Fast</h3>
					<p class="text-gray-300">
						ClickHouse-backed analytics keep dashboards responsive, even when domain data grows.
					</p>
				</div>
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<h3 class="mb-2 text-lg font-semibold text-white">Practical</h3>
					<p class="text-gray-300">
						Designed for daily operator workflows instead of vanity metrics and generic charts.
					</p>
				</div>
				<div class="rounded-lg border border-gray-800 bg-black p-6">
					<h3 class="mb-2 text-lg font-semibold text-white">Actionable</h3>
					<p class="text-gray-300">
						Surfaces risky sources, explains why they matter, and points to clear next investigations.
					</p>
				</div>
			</div>
		</section>

		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Quick Start (Docker Compose)</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-6">
				<pre class="overflow-x-auto text-sm leading-relaxed text-gray-300"><code>{quickStartCommands}</code></pre>
			</div>
		</section>

		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Key API Endpoints</h2>
			<div class="overflow-x-auto rounded-lg border border-gray-800 bg-black">
				<table class="w-full min-w-[660px]">
					<thead class="bg-gray-800">
						<tr>
							<th class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-200">Method</th>
							<th class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-200">Path</th>
							<th class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-200">Description</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-800">
						{#each apiEndpoints as endpoint}
							<tr>
								<td class="px-6 py-4 text-sm text-gray-300">{endpoint.method}</td>
								<td class="px-6 py-4 text-sm text-gray-300">{endpoint.path}</td>
								<td class="px-6 py-4 text-sm text-gray-300">{endpoint.description}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>

		<section class="mb-12">
			<h2 class="mb-6 text-2xl font-bold">Technical Notes</h2>
			<div class="grid gap-6 md:grid-cols-2">
				<div class="rounded-lg border border-gray-800 bg-black p-8">
					<h3 class="mb-3 text-lg font-semibold text-white">Architecture</h3>
					<ul class="space-y-2 text-gray-300">
						<li>• Frontend: Svelte interface for fleet and domain workflows</li>
						<li>• Backend: Python API for summary, sources, failures, and trend endpoints</li>
						<li>• Storage: ClickHouse runtime analytics backend</li>
						<li>• Runtime: Docker Compose stack for local and ops-friendly deployment</li>
					</ul>
				</div>
				<div class="rounded-lg border border-gray-800 bg-black p-8">
					<h3 class="mb-3 text-lg font-semibold text-white">Operational Focus</h3>
					<ul class="space-y-2 text-gray-300">
						<li>• Start broad with cross-domain health and anomaly visibility</li>
						<li>• Drill into one domain for source and alignment diagnostics</li>
						<li>• Track ingestion runs and report freshness in real time</li>
						<li>• Keep policy rollout and exception handling grounded in current risk</li>
					</ul>
				</div>
			</div>
		</section>

		<section>
			<h2 class="mb-6 text-2xl font-bold">Project Status</h2>
			<div class="rounded-lg border border-gray-800 bg-black p-8">
				<div class="mb-4 flex items-center">
					<div class="mr-3 h-3 w-3 rounded-full bg-green-500"></div>
					<span class="text-lg font-semibold text-green-500">Active & Open Source</span>
				</div>
				<p class="mb-6 text-gray-300">
					DMARC-hark is actively developed as an operator-focused monitoring platform for DMARC analysis,
					with practical workflows for triage, remediation, and ingest reliability.
				</p>
				<a
					href="https://github.com/m-a-x-s-e-e-l-i-g/DMARC-hark"
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
		</section>
	</main>
</div>
