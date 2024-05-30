import { listNumbersSum } from './list-numbers-sum';

describe('List Number Sum Test Suite', () => {
  test('Sum must be 15', () => {
    const numberList: number[] = [1, 2, 3, 4, 5];

    const result = listNumbersSum(numberList);

    expect(result).toBe(15);
  });

  test('Sum must be 202', () => {
    const numberList: number[] = [15, 18, 45, 34, 90];

    const result = listNumbersSum(numberList);

    expect(result).toBe(202);
  });
});
