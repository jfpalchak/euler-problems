import { solveMultiples } from './../src/index.js';

describe('solveMultiples', () => {

  // test('should return the result of 9 modulo 3', () => {
  //   const answer = solveMultiples(9, 3);
  //   expect(answer).toEqual(0);
  // });

  // test('should return an array of the numbers 1 to 9', () => {
  //   const answer = solveMultiples(9);
  //   expect(answer).toEqual([1,2,3,4,5,6,7,8,9]);
  // });

  // test('should return an array of numbers divisible by three or five', () => {
  //   const answer = solveMultiples(9);
  //   expect(answer).toEqual([3,5,6,9]);
  // });

  test('should return the sum of numbers divisible by three or five, below 9', () => {
    const answer = solveMultiples(9);
    expect(answer).toEqual(23);
  });

});