<script lang="ts">
  import RangeSelector from '$lib/components/common/RangeSelector.svelte';
  import StatBlock from './StatBlock.svelte';
  import WeaponSelector from './WeaponSelector.svelte';
  import { stats } from './constants';
</script>

<div class="flex flex-col gap-y-2">
  <section class="flex flex-col gap-y-5">
    <h2 class="text-2xl font-bold uppercase">Stats</h2>
    <!-- weapon & level selectors -->
    <div class="grid gap-x-8 gap-y-2 lg:grid-cols-2">
      <div class="flex gap-x-2">
        <WeaponSelector />
        <button
          onclick={() => alert('HELP NEEDED!')}
          class="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-700 text-sm text-white"
          >?</button
        >
      </div>
      <RangeSelector label="Level" value={90} max={90} />
    </div>

    <!-- stat editor -->
    <div class="grid gap-x-8 gap-y-1.5 lg:grid-cols-2">
      {#each stats as stat}
        <StatBlock {stat} element="electro" />
      {/each}
    </div>
  </section>
</div>
