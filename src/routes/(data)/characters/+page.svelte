<script lang="ts">
  import Filter from '$lib/components/feature/Filter/Filter.svelte';
  import {
    elementFilters,
    ratingFilters,
    weaponFilters
  } from '$lib/components/feature/Filter/constants';
  import type { FilterHandler, SelectedFilterGroup } from '$lib/components/feature/Filter/types';

  const customRatingFilters = ratingFilters.slice(0, 2);

  let selectedFilters: SelectedFilterGroup = $state({
    weapon: null,
    element: null,
    rating: null
  });

  const handleFilter: FilterHandler = (selected, type) => {
    if (selected === selectedFilters[type]) {
      selectedFilters[type] = null;
      return;
    }
    selectedFilters[type] = selected;
  };
</script>

<div class="flex flex-col gap-y-8">
  <h1 class="text-4xl font-bold uppercase">Characters</h1>

  <!-- filters -->
  <div class="flex gap-x-8">
    <Filter
      filters={elementFilters}
      selected={selectedFilters.element}
      type="element"
      {handleFilter}
    />
    <Filter
      filters={customRatingFilters}
      selected={selectedFilters.rating}
      type="rating"
      {handleFilter}
    />
  </div>

  <!-- characters -->
  <div class="grid grid-cols-8 gap-1">
    {#each [1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] as character}
      <a href="/characters/{character}">
        <div class="aspect-square border border-zinc-800 bg-zinc-800"></div>
      </a>
    {/each}
  </div>
</div>
