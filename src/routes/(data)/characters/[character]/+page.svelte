<script lang="ts">
  import ContentBlock from '$lib/components/common/ContentBlock.svelte';
  import ImageContainer from '$lib/components/common/ImageContainer.svelte';
  import ImageHeader from '$lib/components/common/ImageHeader.svelte';
  import RangeSelector from '$lib/components/common/RangeSelector.svelte';
  import RequiredItemGroup from '$lib/components/common/RequiredItemGroup.svelte';
  import Separator from '$lib/components/common/Separator.svelte';
  import StarGroup from '$lib/components/common/StarGroup.svelte';
  import DamageFormatSelector from '$lib/components/feature/DataTable/DamageFormatSelector.svelte';
  import Table from '$lib/components/feature/DataTable/Table.svelte';
  import type { ValuesFormat } from '$lib/components/feature/DataTable/types';
  import StatEditorPanel from '$lib/components/feature/StatEditorPanel/StatEditorPanel.svelte';
  // import type { PageData } from './$types';
  // let{ data }: PageData = $props();

  let skillLevels: Record<string, number> = $state({
    normal: 10,
    skill: 10,
    circuit: 10,
    liberation: 10
  });

  let activatedWavebands: Record<number, boolean> = $state({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  const skills = [
    {
      id: 'normal',
      name: 'Normal Attack',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 'skill',
      name: 'Resonance Skill',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 'circuit',
      name: 'Forte Circuit',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 'liberation',
      name: 'Resonance Liberation',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    }
  ];

  const wavebands = [
    {
      id: 0,
      name: 'Waveband Name',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 1,
      name: 'Waveband Name',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 2,
      name: 'Waveband Name',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 3,
      name: 'Waveband Name',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 4,
      name: 'Waveband Name',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 5,
      name: 'Waveband Name',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    }
  ];

  let format: ValuesFormat = $state('multipliers');

  $inspect('Skills', skillLevels);
  $inspect('Wavebands', activatedWavebands);
  $inspect('Format', format);
</script>

<div class="grid grid-cols-[416px_1fr] gap-x-12">
  <!-- LEFT SECTION -->
  <div class="flex flex-col gap-y-4 overflow-hidden">
    <!-- character image -->
    <ImageContainer rating={5}>
      <img class="h-[572px] w-full" src="/temp/T_IconRole_Pile_kakaluo_UI.png" alt="character" />
    </ImageContainer>

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

<section class="mt-16 flex flex-col gap-y-8">
  <!-- title -->
  <div class="flex items-end justify-between">
    <h2 class="flex gap-4 text-3xl font-bold">
      <span>Forte</span>
      <span class="text-zinc-500">/</span>
      <span class="text-zinc-500">Resonator Abilities</span>
    </h2>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-1 text-lg font-bold uppercase">
        <img class="h-6 w-6" src="/stats/T_Iconpropertyredcrit_UI.png" alt="stat" />
        <p>Crit DMG</p>
        <p class="text-electro">+12%</p>
      </div>
      <Separator height="h-5" />
      <div class="flex items-center gap-1 text-lg font-bold uppercase">
        <img class="h-6 w-6" src="/stats/T_Iconpropertyredattack_UI.png" alt="stat" />
        <p>ATK%</p>
        <p class="text-electro">+12%</p>
      </div>
    </div>
  </div>

  <!-- skills and damage tables -->
  {#each skills as skill, i}
    <div class="mb-4 grid grid-cols-2 gap-12 border-t border-zinc-800 pt-6">
      <div class="space-y-4">
        <ImageHeader title={skill.name} subtitle="Skill name goes here" src={skill.src} />
        <ContentBlock element="electro" />
      </div>

      <div class="space-y-2">
        <RangeSelector
          label="{skill.name} Level"
          bind:value={skillLevels[skill.id]}
          min={1}
          max={10}
        />
        <DamageFormatSelector bind:format />
        <Table data="..." {format} />
      </div>
    </div>
  {/each}
</section>
