<script lang="ts">
  import type { WW_Rating } from '$lib/types/globals';
  import type { Snippet } from 'svelte';

  type Props = {
    rating: number;
    children: Snippet;
  };

  let { rating, children }: Props = $props();

  const gradients = {
    5: 'bg-gradient-to-t from-fiveStar/10 via-fiveStar to-fiveStar/10',
    4: 'bg-gradient-to-t from-fourStar/10 via-fourStar to-fourStar/10',
    3: 'bg-gradient-to-t from-threeStar/10 via-threeStar to-threeStar/10',
    2: 'bg-gradient-to-t from-twoStar/10 via-twoStar to-twoStar/10',
    1: 'bg-gradient-to-t from-oneStar/10 via-oneStar to-fourStar/10'
  };
</script>

{#if children}
  <div class="p-[1px] {gradients[rating as WW_Rating] ?? ''}">
    <div class="bg-gradient-to-tl from-zinc-950 via-zinc-900 to-zinc-800">
      {@render children()}
    </div>
  </div>
{/if}
