<script lang="ts">
  import RangeSelector from '$lib/components/common/RangeSelector.svelte';
  import StatBlock from './StatBlock.svelte';
  import WeaponSelector from './WeaponSelector.svelte';
  import { stats, deepenBuffsMulti, deepenBuffsSingle } from './constants';
</script>

<div class="flex flex-col gap-y-10">
  <section class="flex flex-col gap-y-4">
    <h2 class="text-2xl font-bold uppercase leading-none">Stats</h2>
    <!-- weapon & level selectors -->
    <div class="grid gap-x-8 gap-y-2 lg:grid-cols-2">
      <div class="flex items-start gap-x-2">
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

  <section class="flex flex-col gap-y-4">
    <div class="flex items-start gap-x-2">
      <h2 class="text-2xl font-bold uppercase leading-none">Deepen</h2>
      <button
        onclick={() => alert('HELP NEEDED!')}
        class="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-700 text-sm text-white"
        >?</button
      >
    </div>

    {#snippet deepenBtn(data)}
      <button
        onclick={() => alert(data.character + ' DEEPENED!')}
        class="aspect-square border-2 {data.color}"
      >
        <img src="/temp/{data.image}" alt={data.character} />
      </button>
    {/snippet}

    <div class="grid grid-cols-2 gap-8">
      <div class="flex flex-col gap-2">
        <h4 class="capitalize text-zinc-400">Single deepen bonus</h4>
        <div class="grid grid-cols-2 gap-1 lg:grid-cols-6">
          {#each deepenBuffsSingle as buff}
            {@render deepenBtn(buff)}
          {/each}
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h4 class="capitalize text-zinc-400">Team deepen bonus</h4>
        <div class="grid grid-cols-2 gap-1 lg:grid-cols-6">
          {#each deepenBuffsMulti as buff}
            {@render deepenBtn(buff)}
          {/each}
        </div>
      </div>
    </div>
  </section>
</div>
