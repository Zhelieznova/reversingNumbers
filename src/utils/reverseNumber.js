export default function reverseNumber(num) {
  let result = '';
  for (let i = 0; i < num.length; i += 1) {
    result += Math.abs((num[i] % 10) - 10);
  }

  return result;
}
