export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const re = new RegExp(`^${startString}`);
  return Array.from(set).filter((ele) => ele.startsWith(startString)).map(
    (ele) => ele.replace(re, ''),
  ).join('-');
}
