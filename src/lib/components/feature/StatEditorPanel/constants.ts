import type { StatItem } from './types';

export const stats: StatItem[] = [
  {
    name: 'hp',
    label: 'HP',
    image: '/stats/T_Iconpropertygreenlife_UI.png',
    isPercent: false
  },
  {
    name: 'def',
    label: 'DEF',
    image: '/stats/T_Iconpropertygreendefense_UI.png',
    isPercent: false
  },
  {
    name: 'atk',
    label: 'ATK',
    image: '/stats/T_Iconpropertyredattack_UI.png',
    isPercent: false
  },
  {
    name: 'energyRegen',
    label: 'Energy Regen',
    image: '/stats/T_Iconpropertygreenenergy_UI.png',
    isPercent: true
  },
  {
    name: 'critRate',
    label: 'Crit Rate',
    image: '/stats/T_Iconpropertyredbaoji_UI.png',
    isPercent: true
  },
  {
    name: 'critDMG',
    label: 'Crit DMG',
    image: '/stats/T_Iconpropertyredcrit_UI.png',
    isPercent: true
  },
  {
    name: 'healingBonus',
    label: 'Healing Bonus',
    image: '/stats/T_Iconpropertygreencure_UI.png',
    isPercent: true
  },
  {
    name: 'elementBonus',
    label: 'Element Bonus',
    image: '/stats/T_Iconpropertyredmine_UI.png',
    isPercent: true
  },
  {
    name: 'basicAtkBonus',
    label: 'Basic ATK Bonus',
    image: '/stats/T_Iconpropertyredphysics_UI.png',
    isPercent: true
  },
  {
    name: 'heavyAtkBonus',
    label: 'Heavy ATK Bonus',
    image: '/stats/T_Iconpropertyredfoco_UI.png',
    isPercent: true
  },
  {
    name: 'skillBonus',
    label: 'Res. Skill Bonus',
    image: '/stats/T_Iconpropertyredspeed_UI.png',
    isPercent: true
  },
  {
    name: 'liberationBonus',
    label: 'Res. Liberation Bonus',
    image: '/stats/T_Iconpropertyredskill_UI.png',
    isPercent: true
  }
];

export const deepenBuffsSingle = [
  {
    character: 'Mortefi',
    image: 'T_IconRoleHead150_13.png',
    color: 'border-fusion',
    value: [
      {
        name: 'heavyAtkDeepen',
        label: 'Heavy ATK Deepen',
        value: 0.38
      }
    ]
  },
  {
    character: 'Yinlin',
    image: 'T_IconRoleHead150_17.png',
    color: 'border-electro',
    value: [
      {
        name: 'heavyAtkDeepen',
        label: 'Heavy ATK Deepen',
        value: 0.38
      }
    ]
  }
];

export const deepenBuffsMulti = [
  {
    character: 'Verina',
    image: 'T_IconRoleHead256_3_UI.png',
    color: 'border-spectro',
    value: [
      {
        name: 'heavyAtkDeepen',
        label: 'Heavy ATK Deepen',
        value: 0.38
      }
    ]
  }
];
