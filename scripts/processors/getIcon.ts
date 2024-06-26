export function getIcon(path: string): string {
  const lastIndexOfDot = path.lastIndexOf('.');
  if (lastIndexOfDot === -1) {
    return '';
  }
  return path.substring(lastIndexOfDot + 1);
}
