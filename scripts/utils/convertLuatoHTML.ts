export function convertLuaToHTML(luaString: string) {
  if (typeof luaString !== 'string') {
    return;
  }

  // Replace size tags
  luaString = luaString.replace(/<size=\d+>/g, '');
  luaString = luaString.replace(/<\/size>/g, '');

  // Define a mapping for color tags to classes
  const colorMapping: { [key: string]: string } = {
    Title: 'font-title',
    Highlight: 'text-highlight',
    Fire: 'text-fusion',
    Dark: 'text-havoc',
    Ice: 'text-glacio',
    Light: 'text-spectro',
    Wind: 'text-aero',
    Thunder: 'text-electro'
  };

  for (const [color, className] of Object.entries(colorMapping)) {
    const regex = new RegExp(`<color=${color}>`, 'g');
    luaString = luaString.replace(regex, `<span class="${className}">`);
  }
  luaString = luaString.replace(/<\/color>/g, '</span>');

  // Replace new lines with <br> tags
  luaString = luaString.replace(/\n/g, '<br>');

  return luaString;
}
