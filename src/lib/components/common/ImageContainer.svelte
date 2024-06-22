<script lang="ts">
  import type { Snippet } from 'svelte';

  let { rating, children }: { rating: 1 | 2 | 3 | 4 | 5; children: Snippet } = $props();

  const gradients = {
    5: 'bg-gradient-to-t from-fiveStar/10 via-fiveStar to-fiveStar/10',
    4: 'bg-gradient-to-t from-fourStar/10 via-fourStar to-fourStar/10',
    3: 'bg-gradient-to-t from-threeStar/10 via-threeStar to-threeStar/10',
    2: 'bg-gradient-to-t from-twoStar/10 via-twoStar to-twoStar/10',
    1: 'bg-gradient-to-t from-oneStar/10 via-oneStar to-fourStar/10'
  };
</script>

{#if children}
  <div class="p-[1px] {gradients[rating]}">
    <div class="bg-gradient-to-tl from-zinc-900 via-zinc-800 to-zinc-900">
      {@render children()}
    </div>
  </div>
{/if}
