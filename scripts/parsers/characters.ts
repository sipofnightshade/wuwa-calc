// import baseProperty from '../../WutheringData/ConfigDB/BaseProperty.json';
// import skillDescription from '../../WutheringData/ConfigDB/SkillDescription.json';
import roleInfo from '../../WutheringData/ConfigDB/RoleInfo.json';
import { getSkills } from '../processors/getSkills';

import { parseText } from '../utils/parseText';

async function main() {
  const characters = roleInfo.map((role) => {
    if (role.RoleType === 1) {
      return {
        id: role.Id,
        name: parseText('RoleInfo_', role.Id, '_Name'),
        rating: role.QualityId,
        element: parseText('ElementInfo_', role.ElementId, '_Name'),
        weaponType: role.WeaponType,
        skills: getSkills(role.Id)
      };
    }
  });

  const output = Bun.file('./scripts/output/output.json');
  await Bun.write(output, JSON.stringify(characters, null, 2));
}

main();
