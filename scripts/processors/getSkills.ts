import skill from '../../WutheringData/ConfigDB/Skill.json';
import { convertLuaToHTML } from '../utils/convertLuatoHTML';
import { parseText } from '../utils/parseText';
import { getIcon } from './getIcon';

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
      Icon: getIcon(skill.Icon)
    };
  });

  skillData.sort((a, b) => {
    return a.SortIndex - b.SortIndex;
  });

  return skillData;
}
