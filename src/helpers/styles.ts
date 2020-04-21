export function convertHex(_hex, opacity = 100) {
  const hex = _hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  console.log(hex);
  return `rgba(${r},${g},${b},${opacity / 100})`;
}
