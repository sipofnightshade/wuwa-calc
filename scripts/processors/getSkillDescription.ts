import skillDescription from '../../WutheringData/ConfigDB/SkillDescription.json';
import { parseText } from '../utils/parseText';

export function getSkillDescription(id: number) {
  const description = skillDescription
    .filter((desc) => desc.SkillLevelGroupId === id)
    .map((desc) => {
      return {
        Id: desc.Id,
        SkillLevelGroupId: desc.SkillLevelGroupId,
        AttributeName: parseText('SkillDescription_', desc.Id, '_AttributeName'),
        ArrayString: desc.SkillDetailNum[0].ArrayString,
        Order: desc.Order,
        Description: desc.Description.length > 0 ? parseText(desc.Id) : null
      };
    });

  return description;
}
