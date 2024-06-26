import textMulti from '../../WutheringData/TextMap/en/MultiText.json';

export function parseText(start: string, middle: string | number, end: string) {
  return textMulti[`${start}${middle}${end}`];
}
