import baseProperty from '../../WutheringData/ConfigDB/BaseProperty.json';

export function getStats(id: number) {
  const baseStats = baseProperty.find((base) => base.Id === id);

  if (!baseStats) return null;

  return {
    Life: baseStats.Life,
    Atk: baseStats.Atk,
    Def: baseStats.Def,
    Crit: baseStats.Crit / 10000,
    CritDamage: baseStats.CritDamage / 10000,
    EnergyEfficiency: baseStats.EnergyEfficiency / 10000,
    CdReduse: baseStats.CdReduse,
    Sheild: baseStats.Sheild,
    SheildDamageChange: baseStats.SheildDamageChange,
    SheildDamageReduce: baseStats.SheildDamageReduce,
    HealChange: baseStats.HealChange,
    HealedChange: baseStats.HealedChange,
    EnergyMax: baseStats.EnergyMax / 100,
    Energy: baseStats.Energy,
    SpecialEnergy: baseStats.SpecialEnergy2,
    SpecialEnergyMax: baseStats.SpecialEnergy2Max
  };
}
