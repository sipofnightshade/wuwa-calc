import skill from '../../WutheringData/ConfigDB/Skill.json';
import { convertLuaToHTML } from '../utils/convertLuatoHTML';
import { parseText } from '../utils/parseText';
// import { getDamage } from './getDamage';
import { getIcon } from './getIcon';
import { getSkillDescription } from './getSkillDescription';

export function getSkills(id: number) {
  const rawSkillData = skill.filter((skill) => {
    if (skill.SkillGroupId === id) {
      return skill;
    }
  });

  const skillData = rawSkillData.map((skill) => {
    //@ts-expect-error because it still works
    delete skill.EffectSkillPath;
    //@ts-expect-error because it still works
    delete skill.SkillResume;

    return {
      ...skill,
      SkillName: parseText('Skill_', skill.Id, '_SkillName'),
      SkillDescribe: convertLuaToHTML(parseText('Skill_', skill.Id, '_SkillDescribe')),
      SkillType: parseText('SkillType_', skill.SkillType, '_TypeName'),
      Icon: getIcon(skill.Icon),
      // DamageList: skill.DamageList ? skill.DamageList.map((id) => getDamage(id)) : null,
      SkillDetails: getSkillDescription(skill.Id)
    };
  });

  skillData.sort((a, b) => {
    return a.SortIndex - b.SortIndex;
  });

  return skillData;
}
