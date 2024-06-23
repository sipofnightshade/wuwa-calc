<script lang="ts">
  import type { ValuesFormat } from './types';
  type Props = { format: ValuesFormat };
  type Option = { label: string; value: ValuesFormat };

  let { format = $bindable('multipliers') }: Props = $props();

  const options: Option[] = [
    { label: 'Multipliers', value: 'multipliers' },
    { label: 'Individual', value: 'individual' },
    { label: 'Combined', value: 'combined' }
  ];
</script>

<div class="flex gap-2 pb-1" aria-label="radio-group">
  {#each options as { label, value }}
    <label
      for={value}
      class="flex cursor-pointer items-center rounded-full px-3 py-1.5 transition-colors
      {format === value
        ? 'bg-electro-dark text-purple-300'
        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}"
    >
      <span class="text-sm">{label}</span>
      <input class="hidden" id={value} type="radio" {value} bind:group={format} />
    </label>
  {/each}
</div>
