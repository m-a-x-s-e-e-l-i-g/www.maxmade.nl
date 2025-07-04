// Complete projects portfolio data
export const projects = [
	{
		name: "VeryFire",
		displayName: "VeryFire.io",
		description: "Email verification service to validate addresses, check deliverability, and improve email marketing success rates.",
		technologies: ["Web Application", "API", "SaaS"],
		topics: ["email", "verification", "deliverability", "marketing", "saas"],
		isLive: true,
		isFeatured: true,
		liveUrl: "https://www.veryfire.io",
		projectPage: "/projects/veryfire",
		category: "Web Applications"
	},
	{
		name: "PKFR.nl",
		displayName: "PKFR.nl",
		description: "Central hub for the Dutch parkour and freerunning community with spots, events, and community connections.",
		technologies: ["Svelte", "SvelteKit"],
		topics: ["community", "netherlands", "parkour", "freerunning", "spots"],
		stars: 1,
		license: "GPL-3.0",
		isLive: true,
		isFeatured: true,
		liveUrl: "https://www.pkfr.nl",
		projectPage: "/projects/pkfr",
		githubUrl: "https://github.com/m-a-x-s-e-e-l-i-g/pkfr-nl",
		category: "Web Applications"
	},
	{
		name: "current-moon-phase-3d",
		displayName: "Moon Phase 3D",
		description: "Real-time 3D visualization of the current moon phase using Three.js.",
		technologies: ["Svelte", "Three.js"],
		topics: ["threejs", "space", "moon", "3d", "lunar", "visualization"],
		stars: 1,
		license: "GPL-3.0",
		isLive: false,
		projectPage: "/projects/moon-phase-3d",
		githubUrl: "https://github.com/m-a-x-s-e-e-l-i-g/current-moon-phase-3d",
		category: "Visualization"
	},
	{
		name: "renault-radio-code-generator",
		displayName: "Renault Radio Code Generator",
		description: "Web-based tool to generate unlock codes for Renault and Dacia car radios.",
		technologies: ["HTML", "JavaScript"],
		topics: ["radio", "generator", "renault", "dacia", "automotive"],
		stars: 7,
		license: "MIT",
		isLive: false,
		githubUrl: "https://github.com/m-a-x-s-e-e-l-i-g/renault-radio-code-generator",
		category: "Tools"
	},
	{
		name: "MediaNav-to-Evolution-Upgrade",
		displayName: "MediaNav Evolution Upgrade",
		description: "Comprehensive guide to upgrade Renault/Dacia MediaNav systems to Evolution firmware.",
		technologies: ["Shell", "Documentation"],
		topics: ["renault", "dacia", "medianav", "firmware", "automotive"],
		stars: 13,
		license: "GPL-3.0",
		isLive: false,
		githubUrl: "https://github.com/m-a-x-s-e-e-l-i-g/MediaNav-to-Evolution-Upgrade",
		category: "Guides"
	},
	{
		name: "LGU-file-tools",
		displayName: "LGU File Tools",
		description: "Utilities to convert and manipulate LGU firmware files for Renault/Dacia MediaNav systems.",
		technologies: ["Python"],
		topics: ["converter", "renault", "dacia", "lgu", "medianav", "firmware"],
		stars: 5,
		license: "MIT",
		isLive: false,
		githubUrl: "https://github.com/m-a-x-s-e-e-l-i-g/LGU-file-tools",
		category: "Tools"
	},
	{
		name: "very-ssh",
		displayName: "Very SSH",
		description: "Minimal, fast GUI application for quickly launching SSH sessions from your ~/.ssh/config.",
		technologies: ["Python", "GUI"],
		topics: ["ssh", "gui", "ssh-config", "productivity"],
		stars: 2,
		license: "MIT",
		isLive: false,
		githubUrl: "https://github.com/m-a-x-s-e-e-l-i-g/very-ssh",
		category: "Development Tools"
	},
	{
		name: "SSHKeychain",
		displayName: "SSH Keychain VS Extension",
		description: "Visual Studio Command Palette extension for quick SSH session management.",
		technologies: ["C#", "Visual Studio"],
		topics: ["ssh", "visual-studio", "extension", "development"],
		stars: 1,
		license: "MIT",
		isLive: false,
		githubUrl: "https://github.com/m-a-x-s-e-e-l-i-g/SSHKeychain",
		category: "Development Tools"
	},
	{
		name: "bluetube-youtube-tv-for-windows",
		displayName: "BlueTube for Windows",
		description: "Unofficial YouTube TV client application designed specifically for Windows devices.",
		technologies: ["C#", "WinUI3"],
		topics: ["youtube", "uwp", "smart-tv", "tv", "winui3", "windows"],
		stars: 0,
		license: "MIT",
		isLive: false,
		githubUrl: "https://github.com/m-a-x-s-e-e-l-i-g/bluetube-youtube-tv-for-windows",
		category: "Applications"
	},
	{
		name: "project-infinitisphere",
		displayName: "InfinitiSphere QR Generator",
		description: "Specialized QR code generator for golf ball tracking and management systems.",
		technologies: ["Svelte"],
		topics: ["qrcode", "svelte", "qrcode-generator", "golf", "tracking"],
		stars: 0,
		license: "MIT",
		isLive: false,
		githubUrl: "https://github.com/m-a-x-s-e-e-l-i-g/project-infinitisphere",
		category: "Tools"
	},
	{
		name: "common-email-domain-typos",
		displayName: "Email Domain Typos List",
		description: "Comprehensive dataset of common email domain typos with suggested corrections for validation systems.",
		technologies: ["Data", "Shell"],
		topics: ["list", "spellcheck", "email", "domains", "autocorrect", "dataset"],
		stars: 2,
		license: "GPL-3.0",
		isLive: false,
		githubUrl: "https://github.com/m-a-x-s-e-e-l-i-g/common-email-domain-typos",
		category: "Data"
	}
];

export function getTechColor(tech: string): string {
	const colors: { [key: string]: string } = {
		'Svelte': 'bg-orange-500',
		'SvelteKit': 'bg-orange-600',
		'JavaScript': 'bg-yellow-500',
		'TypeScript': 'bg-blue-500',
		'Python': 'bg-green-500',
		'C#': 'bg-purple-500',
		'HTML': 'bg-orange-600',
		'Shell': 'bg-gray-500',
		'Three.js': 'bg-black',
		'WinUI3': 'bg-blue-600',
		'Web Application': 'bg-teal-500',
		'API': 'bg-indigo-500',
		'SaaS': 'bg-pink-500',
		'GUI': 'bg-cyan-500',
		'Data': 'bg-amber-500',
		'Documentation': 'bg-slate-500',
		'Visual Studio': 'bg-purple-600'
	};
	return colors[tech] || 'bg-gray-600';
}
