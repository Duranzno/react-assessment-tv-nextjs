import { addDividerElements } from './array';

describe('Array Helpers', () => {
  it('should add divider elementes', () => {
    const arr = [1, 2, 3];
    const res = addDividerElements(arr, 0);
    expect(JSON.stringify(res)).toBe(JSON.stringify([1, 0, 2, 0, 3]));
  });
});
