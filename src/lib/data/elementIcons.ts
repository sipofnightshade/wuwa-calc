import type { WW_Elements } from '$lib/types/globals';

export const elementIcons: Record<WW_Elements, { color: string; white: string }> = {
  Glacio: {
    color: 'T_IconElementIce',
    white: 'T_IconElementIce1'
  },
  Fusion: {
    color: 'T_IconElementFire',
    white: 'T_IconElementFire1'
  },
  Electro: {
    color: 'T_IconElementThunder',
    white: 'T_IconElementThunder1'
  },
  Aero: {
    color: 'T_IconElementWind',
    white: 'T_IconElementWind1'
  },
  Spectro: {
    color: 'T_IconElementLight',
    white: 'T_IconElementLight1'
  },
  Havoc: {
    color: 'T_IconElementDark',
    white: 'T_IconElementDark1'
  }
};
