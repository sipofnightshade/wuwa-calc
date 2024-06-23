<script lang="ts">
  import type { WW_Elements } from '$lib/types/globals';
  import { colors } from '$lib/data/colors';

  type Props = {
    element: WW_Elements;
  };

  let { element }: Props = $props();

  let currentColor = $derived(colors[element]);
</script>

<div class="flex flex-col gap-y-2">
  <strong class="font-bold {currentColor.text}">Section Header</strong>
  <p class="text-zinc-400">
    Leader of the "Ghost Hounds", an international mercenary group. Ruthless, vengeful, unforgiving.
    A potential client must be mindful of the price to pay before making him an offer. A potential
    client must be mindful of the price to pay before making him an offer.
  </p>
</div>
