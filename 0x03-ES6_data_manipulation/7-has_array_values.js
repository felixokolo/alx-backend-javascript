export default function hasValuesFromArray(set, array) {
  let ret = true;
  for (const ele of array) {
    if (!set.has(ele)) ret = false;
  }
  return ret;
}
