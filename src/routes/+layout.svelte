<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';
	import { dev } from '$app/environment';
	import TailwindBreakpoints from '$lib/components/TailwindBreakpoints.svelte';

	export let data: LayoutData;
</script>

<div
	class="absolute top-0 z-[-2] h-screen w-screen overflow-hidden bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-slate-200"
>
	<div class="h-full w-full overflow-y-auto">
		<slot />
	</div>
</div>

{#if dev}
	<TailwindBreakpoints />
{/if}
