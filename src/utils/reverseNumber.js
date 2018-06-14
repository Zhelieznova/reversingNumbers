export default function reverseNumber(num) {
  const number = num.toString();
  let result = '';
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] !== '-') {
      result += Math.abs((number[i] % 10) - 10);
    } else {
      result += number[i];
    }
  }
  return result;
}
