import { solveMultiples } from './../src/index.js';

describe('solveMutliples', () => {

  test('should return the result of 9 modulo 3', () => {
    const answer = solveMultiples(9, 3);
    expect(answer).toEqual(0);
  });
});