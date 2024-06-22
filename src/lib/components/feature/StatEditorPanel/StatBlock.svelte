<script lang="ts">
  import type { StatItem } from './types';

  let { stat, element }: { stat: StatItem; element: string } = $props();

  let value = $state(0);

  const focusColors = 'focus:border-electro';
</script>

<div class="flex items-center justify-between">
  <div class="flex items-center gap-2 opacity-60">
    <img class="h-6" src={stat.image} alt={stat.label} />
    <span class="text-lg uppercase">{stat.label}</span>
  </div>

  <div class="relative">
    <span class:hidden={!stat.isPercent} class="absolute right-2 top-1/2 -translate-y-1/2">%</span>
    <input
      type="number"
      step="10"
      class="block h-9 w-24 border border-zinc-800 bg-zinc-800 px-2 text-right outline-none transition-colors hover:border-zinc-500 {focusColors}"
      class:pr-[21px]={stat.isPercent}
      bind:value
    />
  </div>
</div>

<style>
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
</style>
