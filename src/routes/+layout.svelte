<script lang="ts">
	import '../app.css';
	import '@fontsource/palanquin/400.css';
	import '@fontsource/palanquin/700.css';
	import { dev } from '$app/environment';
	import TailwindBreakpoints from '$lib/components/feature/TailwindBreakpoints.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<div
	class="absolute top-0 z-[-2] h-screen w-screen overflow-hidden bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-slate-200"
>
	<div class="flex h-full w-full flex-col justify-between gap-y-4 overflow-y-auto">
		<Navbar />
		<div class="container mx-auto px-2 py-8">
			<slot />
		</div>
		<Footer />
	</div>
</div>

{#if dev}
	<TailwindBreakpoints />
{/if}
