import type { WW_Elements } from '$lib/types/globals';

interface Color {
  id: number;
  name: WW_Elements;
  border: string;
  bg: string;
  text: string;
}

export const colors: Record<WW_Elements, Color> = {
  glacio: {
    id: 1,
    name: 'glacio',
    border: 'border-glacio',
    bg: 'bg-glacio',
    text: 'text-glacio'
  },
  fusion: {
    id: 2,
    name: 'fusion',
    border: 'border-fusion',
    bg: 'bg-fusion',
    text: 'text-fusion'
  },
  electro: {
    id: 3,
    name: 'electro',
    border: 'border-electro',
    bg: 'bg-electro',
    text: 'text-electro'
  },
  aero: {
    id: 4,
    name: 'aero',
    border: 'border-aero',
    bg: 'bg-aero',
    text: 'text-aero'
  },
  spectro: {
    id: 5,
    name: 'spectro',
    border: 'border-spectro',
    bg: 'bg-spectro',
    text: 'text-spectro'
  },
  havoc: {
    id: 5,
    name: 'havoc',
    border: 'border-havoc',
    bg: 'bg-havoc',
    text: 'text-havoc'
  }
};
