import type { WW_Elements, WW_Rating, WW_Weapons } from '$lib/types/globals';

export type FilterItem = {
  id: number;
  name: WW_Elements | WW_Weapons | WW_Rating;
  imageUrl?: string;
  color?: string;
};

export type FilterContainer = {
  filters: FilterItem[];
  selected: SelectedFilter;
  handleFilter: FilterHandler;
  type: FilterType;
};

export type SelectedFilterGroup = {
  weapon: SelectedFilter;
  element: SelectedFilter;
  rating: SelectedFilter;
};

export type FilterHandler = (selected: SelectedFilter, type: FilterType) => void;
export type SelectedFilter = number | null;
export type FilterType = 'element' | 'rating' | 'weapon';
