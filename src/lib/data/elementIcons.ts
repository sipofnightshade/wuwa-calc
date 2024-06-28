import type { elements } from './primitives';

type ElementIcons = Record<keyof typeof elements, { color: string; white: string }>;

export const elementIcons: ElementIcons = {
  1: {
    color: 'T_IconElementIce',
    white: 'T_IconElementIce1_UI'
  },
  2: {
    color: 'T_IconElementFire',
    white: 'T_IconElementFire1_UI'
  },
  3: {
    color: 'T_IconElementThunder',
    white: 'T_IconElementThunder1_UI'
  },
  4: {
    color: 'T_IconElementWind',
    white: 'T_IconElementWind1_UI'
  },
  5: {
    color: 'T_IconElementLight',
    white: 'T_IconElementLight1_UI'
  },
  6: {
    color: 'T_IconElementDark',
    white: 'T_IconElementDark1_UI'
  }
};
