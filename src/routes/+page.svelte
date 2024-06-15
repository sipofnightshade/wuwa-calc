<script lang="ts">
	const routes = ['characters', 'weapons', 'echoes', 'simulator'];
</script>

<div class="mx-auto w-fit space-y-4">
	<h1 class="text-4xl font-bold">Welcome, Rovers!</h1>

	<div class="flex justify-center gap-4">
		{#each routes as route}
			<a href="/{route}" class="flex flex-col items-center gap-y-2">
				<div class="h-28 w-28 rounded-sm bg-zinc-800"></div>
				<p class="font-bold capitalize">{route}</p>
			</a>
		{/each}
	</div>
</div>

<!-- USE A SNIPPET HERE TO HIGHLIGHT THE SIMULATOR DIFFERENTLY -->
