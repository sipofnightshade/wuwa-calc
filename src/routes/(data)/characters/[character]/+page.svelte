<script lang="ts">
  import ContentBlock from '$lib/components/common/ContentBlock.svelte';
  import ImageContainer from '$lib/components/common/ImageContainer.svelte';
  import ImageHeader from '$lib/components/common/ImageHeader.svelte';
  import RangeSelector from '$lib/components/common/RangeSelector.svelte';
  import RequiredItemGroup from '$lib/components/common/RequiredItemGroup.svelte';
  import Separator from '$lib/components/common/Separator.svelte';
  import StarGroup from '$lib/components/common/StarGroup.svelte';
  import ToggleSwitch from '$lib/components/common/ToggleSwitch.svelte';
  import DamageFormatSelector from '$lib/components/feature/DataTable/DamageFormatSelector.svelte';
  import Table from '$lib/components/feature/DataTable/Table.svelte';
  import type { ValuesFormat } from '$lib/components/feature/DataTable/types';
  import StatEditorPanel from '$lib/components/feature/StatEditorPanel/StatEditorPanel.svelte';
  import { colors } from '$lib/data/colors';
  // import type { PageData } from './$types';
  // let{ data }: PageData = $props();

  const element = 'electro';

  let skillLevels: Record<string, number> = $state({
    normal: 10,
    skill: 10,
    circuit: 10,
    liberation: 10
  });

  let activatedInherentSkills: Record<number, boolean> = $state({
    0: false,
    1: false
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

  const inherentSkills = [
    {
      id: 1,
      name: 'Normal Attack',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 2,
      name: 'Resonance Skill',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    }
  ];

  const wavebands = [
    {
      id: 0,
      name: 'C1',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 1,
      name: 'C2',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 2,
      name: 'C3',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 3,
      name: 'C4',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 4,
      name: 'C5',
      src: '/temp/T_IconDevice_JiyanM6_UI.png'
    },
    {
      id: 5,
      name: 'C6',
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
      <p class={colors[element].text}>ELECTRO</p>
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

{#snippet SectionTitle(title, shortDesc)}
  <h2 class="flex gap-4 text-2xl font-bold">
    <span>{title}</span>
    <span class="text-zinc-500">/</span>
    <span class="text-zinc-500">{shortDesc}</span>
  </h2>
{/snippet}

{#snippet SkillHeader(skill)}
  <div class="space-y-4">
    <ImageHeader title={skill.name} subtitle="Skill name goes here" src={skill.src} />
    <ContentBlock {element} />
  </div>
{/snippet}

<!-- skills and damage tables -->
<section class="mt-16 flex flex-col gap-y-6">
  <div class="flex items-end justify-between">
    {@render SectionTitle('Forte', 'Resonator Abilities')}
    <div class="flex items-center gap-4 font-bold uppercase">
      <div class="flex items-center gap-1">
        <img class="h-6 w-6" src="/stats/T_Iconpropertyredcrit_UI.png" alt="stat" />
        <p>Crit DMG</p>
        <p class={colors[element].text}>+12%</p>
      </div>
      <Separator height="h-5" />
      <div class="flex items-center gap-1">
        <img class="h-6 w-6" src="/stats/T_Iconpropertyredattack_UI.png" alt="stat" />
        <p>ATK%</p>
        <p class={colors[element].text}>+12%</p>
      </div>
    </div>
  </div>

  {#each skills as skill, i}
    <div class="grid grid-cols-2 gap-12 border-t border-zinc-700 pt-6">
      {@render SkillHeader(skill)}

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

<!-- inherent skills -->
<section class="mt-16 flex flex-col gap-y-6">
  {@render SectionTitle('Inherent Skills', 'Circuit Upgrades')}

  {#each inherentSkills as skill}
    <div class="grid grid-cols-[2fr,1fr] gap-12 border-t border-zinc-700 pt-6">
      {@render SkillHeader(skill)}

      <div class="flex justify-end">
        <ToggleSwitch
          label="inherentSkill_{skill.id}"
          {element}
          bind:value={activatedInherentSkills[skill.id]}
        />
      </div>
    </div>
  {/each}
</section>

<!-- resonance chain -->
<section class="mt-16 flex flex-col gap-y-6">
  {@render SectionTitle('Resonance Chain', 'Wavebands')}

  {#each wavebands as waveband}
    <div class="grid grid-cols-[2fr,1fr] gap-12 border-t border-zinc-700 pt-6">
      {@render SkillHeader(waveband)}

      <div class="flex justify-end">
        <ToggleSwitch
          label="inherentSkill_{waveband.id}"
          {element}
          bind:value={activatedWavebands[waveband.id]}
        />
      </div>
    </div>
  {/each}
</section>
