export default function cleanSet(set, startString) {
  const test = 'bon';
  const re = new RegExp(`/^${test}/`);
  return Array.from(set).filter((ele) => ele.startsWith(test)).map(
    (ele) => ele.replace(re, ''),
  );
}
