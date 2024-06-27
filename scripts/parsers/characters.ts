import roleInfo from '../../WutheringData/ConfigDB/RoleInfo.json';
import { getSkills } from '../processors/getSkills';
import { getStats } from '../processors/getStats';

import { parseText } from '../utils/parseText';

async function main() {
  const characters = roleInfo
    .map((role) => {
      if (role.RoleType === 1) {
        return {
          Id: role.Id,
          Name: parseText('RoleInfo_', role.Id, '_Name'),
          Rating: role.QualityId,
          Element: parseText('ElementInfo_', role.ElementId, '_Name'),
          WeaponType: role.WeaponType,
          Stats: getStats(role.Id),
          Skills: getSkills(role.Id)
        };
      }
    })
    .filter((char) => char !== undefined && char.Id !== undefined);

  characters.sort((a, b) => {
    // @ts-expect-error because it still works
    return a.Id - b.Id;
  });

  const output = Bun.file('./scripts/output/output.json');
  await Bun.write(output, JSON.stringify(characters, null, 2));

  // for (const char of characters) {
  //   if (char && char.Name) {
  //     const output = Bun.file(`./scripts/temp/${char.Name}.json`);
  //     await Bun.write(output, JSON.stringify(char, null, 2));
  //   }
  // }
}

main();
