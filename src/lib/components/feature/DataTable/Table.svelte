<script lang="ts">
  import type { ValuesFormat } from './types';

  type Props = {
    data: any;
    format: ValuesFormat;
  };

  let { data, format = $bindable('combined') }: Props = $props();
</script>

<ul aria-label="table ">
  {#each [1, 2, 3, 4] as item}
    <li class="grid grid-cols-2 gap-2 px-3 py-2.5 odd:bg-zinc-800" aria-label="row">
      <p>Part {item} DMG</p>
      <p class="text-right">20%*4 + 58.6%</p>
    </li>
  {/each}
</ul>
