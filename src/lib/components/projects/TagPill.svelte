<script lang="ts">
	export let label: string;
	export let color: 'orange' | 'blue' | 'emerald' | 'pink' | 'green' | 'gray' = 'gray';
	export let outlined: boolean = false;

	const colorMap: Record<typeof color, string> = {
		orange: 'bg-orange-500 text-white',
		blue: 'bg-blue-500 text-white',
		emerald: 'bg-emerald-600 text-white',
		pink: 'bg-pink-600 text-white',
		green: 'bg-green-500 text-white',
		gray: 'bg-gray-700 text-white'
	};
</script>

<span
	class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors
		{outlined ? 'border border-white text-white' : colorMap[color]}"
>
	{label}
</span>
