export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') return '';
  if (startString === '') return '';
  if (!(set instanceof Set)) return '';
  const re = new RegExp(`^${startString}`);
  return Array.from(set).filter((ele) => ele.startsWith(startString)).map(
    (ele) => ele.replace(re, ''),
  ).join('-');
}
