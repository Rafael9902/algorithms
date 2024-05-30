export const addUpTo = (limit: number) => {
  /**
   *
   */

  //   let sum: number = 0;

  //   for (let i = 0; i <= limit; i++) {
  //     sum += i;
  //   }

  //   return sum;

  /**
   * Three single operations
   * multiplication, sum and division
   */
  return (limit * (limit + 1)) / 2;
};
