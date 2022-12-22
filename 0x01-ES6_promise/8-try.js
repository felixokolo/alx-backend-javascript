export default function divideFunction(numerator, denominator) {
  let res;
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  } else {
    res = numerator / denominator;
  }
  return res;
}
