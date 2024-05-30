export const listNumbersSum = (numberList: number[]) => {
  let sum = 0;

  for (const item of numberList) {
    sum += item;
  }
  //   const sum = numberList.reduce((previous, current) => previous + current);

  return sum;
};
