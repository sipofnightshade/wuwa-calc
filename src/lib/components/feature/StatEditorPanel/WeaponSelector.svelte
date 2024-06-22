<script lang="ts">
  import Separator from '$lib/components/common/Separator.svelte';
</script>

{#snippet stat(label, value)}
  <p class="flex gap-2">
    <span>{label}</span>
    <span>{value}</span>
  </p>
{/snippet}

<button
  class="flex w-full items-end gap-3 border border-zinc-700 p-1 transition-colors hover:border-zinc-400"
  onclick={() => alert('clicked')}
>
  <img class="h-14 w-14 bg-zinc-800" src="/temp/T_IconWeapon21010015_UI.png" alt="weapon" />
  <div class="flex w-full flex-col pr-2">
    <h4 class="text-left text-zinc-400">Verdant Summit</h4>
    <div class="flex h-6 items-center justify-between font-bold">
      {@render stat('ATK', '437')}
      <Separator />
      {@render stat('CRIT DMG', '44.1%')}
    </div>
  </div>
</button>
