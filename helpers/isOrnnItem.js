export default function isOrnnItem(item = {}) {
  return (
    item.requiredAlly === 'Ornn' ||
    (item.description || '').includes('ornnBonus')
  );
}
