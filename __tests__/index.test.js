import { solveMultiples } from './../src/index.js';

describe('solveMutliples', () => {

  test('should return the modulo of 10 and 3', () => {
    const answer = solveMultiples(10, 3);
    expect(answer).toEqual(1)
  });
});