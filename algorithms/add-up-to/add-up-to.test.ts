import { addUpTo } from './add-up-to';

describe('Add up to Test Suite', () => {
  let initialTime: number;
  let endedTime: number;

  beforeEach(() => (initialTime = performance.now()));

  afterEach(() => {
    endedTime = performance.now();
    console.log(`Time elapsed: ${(endedTime - initialTime) / 1000} seconds`);
  });

  test('Sum must be 15', () => {
    const limit: number = 5;

    const resutl = addUpTo(limit);

    expect(resutl).toBe(15);
  });

  test('Sum must be 55', () => {
    const limit: number = 10;

    const resutl = addUpTo(limit);

    expect(resutl).toBe(55);
  });

  test('Sum must be 120', () => {
    const limit: number = 1000000000;

    const resutl = addUpTo(limit);

    expect(resutl).toBe(500000000500000000);
  });
});
