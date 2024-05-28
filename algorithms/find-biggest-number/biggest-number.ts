const biggerNumber = (numberList: number[]) => {
  let biggerNumber: number = 0;

  numberList.forEach((number) => {
    if (number > biggerNumber) {
      biggerNumber = number;
    }
  });

  return biggerNumber;
};

const numberList: number[] = [1, 4, 2, 3, 9, 5, 6];

console.log(biggerNumber(numberList));
