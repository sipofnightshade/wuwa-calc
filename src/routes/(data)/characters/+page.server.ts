import type { PageServerLoad } from './$types';
// import characterData from '/home/sol/Code/wuwa-calc/scripts/output/characters.json';
import characterData from '$lib/data/characters.json';

export const load = (async () => {
  const characters = characterData.map((char) => {
    return {
      id: char.Id,
      slug: char.Name.toLowerCase().replace(/ /g, '-'),
      name: char.Name,
      images: char.Icon,
      element: char.Element,
      weaponType: char.WeaponType,
      rating: char.Rating
    };
  });

  characters.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return {
    characters
  };
}) satisfies PageServerLoad;

export const prerender = true;
