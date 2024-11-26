function decrypt(code: number[], numberOfItemsToSum: number): number[] {
  const result: number[] = Array(code.length).fill(0);
  const absNumberOfItemsToSum = Math.abs(numberOfItemsToSum);
  if (numberOfItemsToSum === 0) {
    return result;
  }
  const sumForward = numberOfItemsToSum >= 0;
  for (let index = 0; index < code.length; index++) {
    let summedItems = 0;
    for (
      let indexToSum = sumForward ? index + 1 : index - 1;
      sumForward
        ? summedItems <= numberOfItemsToSum
        : summedItems >= numberOfItemsToSum;
      sumForward ? indexToSum++ : indexToSum--
    ) {
      if (indexToSum === code.length) {
        indexToSum = 0;
      }

      if (summedItems === absNumberOfItemsToSum) {
        break;
      }

      result[index] += code.at(indexToSum)!;

      summedItems++;
    }
  }

  return result;
}

console.log(decrypt([2, 4, 9, 3], -2)); //[12,5,6,13]
console.log(decrypt([1, 2, 3, 4], 0)); //[0,0,0,0]
console.log(decrypt([5, 7, 1, 4], 3)); //[12,10,16,13]
