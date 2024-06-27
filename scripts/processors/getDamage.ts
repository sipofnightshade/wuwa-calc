import damage from '../../WutheringData/ConfigDB/Damage.json';

export function getDamage(id: number) {
  const damageInfo = damage.find((damage) => damage.Id === id);
  if (!damageInfo) {
    return null;
  }
  return damageInfo.RateLv;
}

// SkillDescription_3300004_AttributeName
