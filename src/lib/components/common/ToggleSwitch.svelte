<script lang="ts">
  import type { WW_Elements } from '$lib/types/globals';
  import { colors } from '$lib/data/colors';

  type Props = {
    label: string;
    value: boolean;
    element: WW_Elements;
  };

  let { label, element, value = $bindable() }: Props = $props();
</script>

<!-- <label class="inline-flex cursor-pointer items-center" for="switch-{label}">
  <input class="" id="switch-{label}" type="checkbox" bind:checked={value} />
</label> -->

<button
  class="flex h-fit w-[56px] rounded-full p-1 ring-0 transition-colors duration-300 {value
    ? colors[element].bg
    : 'bg-zinc-600'}"
  onclick={() => (value = !value)}
  role="switch"
  aria-labelledby="switch-{label}"
  aria-checked={value}
>
  <div
    class="h-6 w-6 rounded-full transition-all ease-in {value}"
    class:bg-zinc-200={!value}
    class:bg-zinc-800={value}
    class:translate-x-full={value}
  ></div>
</button>
