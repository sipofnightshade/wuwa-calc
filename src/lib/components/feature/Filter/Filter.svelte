<script lang="ts">
  import type { FilterContainer } from './types';

  let { filters, selected, handleFilter, type }: FilterContainer = $props();
</script>

<div class="flex gap-2">
  {#each filters as filter}
    {@const coloredBorder = filter.color ?? 'border-zinc-300'}
    <button
      onclick={() => handleFilter(filter.id, type)}
      class="h-10 w-10 border bg-zinc-800 p-1 {selected === filter.id
        ? `${coloredBorder} hover:${coloredBorder}`
        : 'border-zinc-800 hover:border-zinc-400'}"
    >
      <img
        class="w-full"
        class:opacity-50={selected !== filter.id}
        src={filter.imageUrl}
        alt={filter.name && 'filter'}
      />
    </button>
  {/each}
</div>
