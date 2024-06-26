import type { WW_Elements, WW_Rating, WW_Weapons } from './globals';

export type Character = {
  id: number;
  name: string;
  element: WW_Elements;
  weapon: WW_Weapons;
  rating: WW_Rating;
  image: {
    circle: string;
    square: string;
    card: string;
  };
};
