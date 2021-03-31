export default function formatPatch(patch) {
  return patch.split('.').reverse().splice(1).reverse().join('.');
}
