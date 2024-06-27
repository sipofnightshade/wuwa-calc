import textMulti from '../../WutheringData/TextMap/en/MultiText.json';

export function parseText(...parts: (string | number)[]) {
  return textMulti[parts.join('')];
}
