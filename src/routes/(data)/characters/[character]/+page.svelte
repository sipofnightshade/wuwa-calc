<script lang="ts">
  import RequiredItemGroup from '$lib/components/common/RequiredItemGroup.svelte';
  import Separator from '$lib/components/common/Separator.svelte';
  import StarGroup from '$lib/components/common/StarGroup.svelte';
  import StatEditorPanel from '$lib/components/feature/StatEditorPanel/StatEditorPanel.svelte';
  // import type { PageData } from './$types';
  // export let data: PageData;
</script>

<div class="grid grid-cols-[416px_1fr] gap-x-12">
  <!-- LEFT SECTION -->
  <div class="flex flex-col gap-y-4 overflow-hidden">
    <!-- character image -->
    <div class="border border-zinc-600 p-1">
      <img class="h-[572px] w-full" src="/temp/T_IconRole_Pile_kakaluo_UI.png" alt="character" />
    </div>

    <!-- character info -->
    <div class="flex items-end gap-2 overflow-hidden">
      <img
        class="h-16 w-16 scale-[1.15]"
        src="/elements/T_IconElementThunder1.webp"
        alt="element"
      />
      <h1 class="text-6xl font-bold">Calcharo</h1>
    </div>

    <!-- character metadata -->
    <div class="flex items-center justify-between gap-x-2 text-sm font-bold uppercase">
      <StarGroup rating={5} />
      <Separator />
      <p>BROADBLADE</p>
      <Separator />
      <p class="text-electro">ELECTRO</p>
    </div>

    <!-- character item requirements -->
    <div class="flex items-center justify-between">
      <RequiredItemGroup url="/temp/T_IconMout_L_012_UI.png" count="32" />
      <RequiredItemGroup url="/temp/T_IconMout_O_002_3_UI.png" count="60" />
      <RequiredItemGroup url="/temp/T_IconMout_O_003_4_UI.png" count="16" />
      <RequiredItemGroup url="/temp/T_IconA_hsb_UI.png" count="1.6m" />
    </div>
  </div>

  <!-- RIGHT SECTION -->
  <StatEditorPanel />
</div>
