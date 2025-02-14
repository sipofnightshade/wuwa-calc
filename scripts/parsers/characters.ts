import roleInfo from '../../WutheringData/ConfigDB/RoleInfo.json';
import { getIcon } from '../processors/getIcon';
import { getSkills } from '../processors/getSkills';
import { getStats } from '../processors/getStats';
// import { getWeaponType } from '../processors/getWeaponType';

import { parseText } from '../utils/parseText';

async function main() {
  const characters = roleInfo
    .map((role) => {
      if (role.RoleType === 1) {
        if (role.Id === 1502 || role.Id === 1605) return;
        return {
          Id: role.Id,
          Name: parseText('RoleInfo_', role.Id, '_Name'),
          Rating: role.QualityId,
          Element: role.ElementId,
          WeaponType: role.WeaponType,
          Stats: getStats(role.Id),
          Skills: getSkills(role.Id),
          Icon: {
            Head: getIcon(role.RoleHeadIconLarge),
            HeadCircle: getIcon(role.RoleHeadIconCircle),
            Card: getIcon(role.FormationRoleCard)
          }
        };
      }
    })
    .filter((char) => char !== undefined && char.Id !== undefined);

  characters.sort((a, b) => {
    // @ts-expect-error because it still works
    return a.Id - b.Id;
  });

  const output = Bun.file('./scripts/output/characters.json');
  const output2 = Bun.file('./src/lib/data/characters.json');
  await Bun.write(output, JSON.stringify(characters, null, 2));
  await Bun.write(output2, JSON.stringify(characters, null, 2));

  // for (const char of characters) {
  //   if (char && char.Name) {
  //     const output = Bun.file(`./scripts/temp/${char.Name}.json`);
  //     await Bun.write(output, JSON.stringify(char, null, 2));
  //   }
  // }
}

main();
