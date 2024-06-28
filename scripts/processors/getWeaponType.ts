export const weaponMappings = {
  1: 'Broadblade',
  2: 'Sword',
  3: 'Pistols',
  4: 'Gauntlets',
  5: 'Rectifier'
};
export function getWeaponType(id: number) {
  if (id >= 1 && id <= 5) {
    return weaponMappings[id];
  }
  return null;
}
