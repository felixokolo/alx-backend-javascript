export default function divideFunction(numerator, denominator) {
  let res;
  try {
    res = numerator / denominator;
  } catch (e) {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    }
  }
  return res;
}
