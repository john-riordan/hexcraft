export default function formatPatch(patch) {
  return patch.split(".").reverse().splice(1).reverse().join(".");
}
export function patchDisplay(patch, withLegacyName = false) {
  if (!patch) return "";
  const [major, minor] = `${patch}`.split(".");
  const yearMap = {
    15: "25",
    16: "26",
    17: "27",
    18: "28",
    19: "29",
    20: "30",
  };
  const minorPrefixed = Number(minor) < 10 ? `0${minor}` : minor;
  return (
    `${yearMap[major]}.${minorPrefixed}` +
    (withLegacyName ? ` (${major}.${minor})` : "")
  );
}
