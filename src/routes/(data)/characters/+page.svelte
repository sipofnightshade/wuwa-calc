<script lang="ts">
  import ImageContainer from '$lib/components/common/ImageContainer.svelte';
  import Filter from '$lib/components/feature/Filter/Filter.svelte';
  import {
    elementFilters,
    ratingFilters,
    weaponFilters
  } from '$lib/components/feature/Filter/constants';
  import { elementIcons } from '$lib/data/elementIcons';
  import type { FilterHandler, SelectedFilterGroup } from '$lib/components/feature/Filter/types';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  let selectedFilters: SelectedFilterGroup = $state({
    weapon: null,
    element: null,
    rating: null
  });

  const customRatingFilters = ratingFilters.slice(0, 2);

  const handleFilter: FilterHandler = (selected, type) => {
    if (selected === selectedFilters[type]) {
      selectedFilters[type] = null;
      return;
    }

    selectedFilters[type] = selected;
  };

  let filteredList = $derived.by(() => {
    let list = data.characters;

    if (selectedFilters.element) {
      list = list.filter((character) => character.element === selectedFilters.element);
    }

    if (selectedFilters.weapon) {
      list = list.filter((character) => character.weaponType === selectedFilters.weapon);
    }

    if (selectedFilters.rating) {
      list = list.filter((character) => character.rating === selectedFilters.rating);
    }

    return list;
  });

  $inspect('characters', data);
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
      filters={weaponFilters}
      selected={selectedFilters.weapon}
      type="weapon"
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
  <div class="grid grid-cols-8 gap-2">
    {#each filteredList as character}
      <a class="flex flex-col items-center gap-1" href="/characters/{character.slug}">
        <ImageContainer rating={character.rating}>
          <div class="relative">
            <img
              class="aspect-square h-full w-full"
              src="/characters/{character.images.Head}.webp"
              alt={character.name}
            />
            <img
              class="absolute right-0 top-0 h-6 w-6 lg:h-8 lg:w-8"
              src="/elements/{elementIcons[character.element].white}.webp"
              alt="element"
            />
          </div>
        </ImageContainer>

        <p class="text-center text-sm font-medium lg:text-base">{character.name}</p>
      </a>
    {/each}
  </div>
</div>
