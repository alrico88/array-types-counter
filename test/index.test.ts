import {countArrayTypes} from '../src/index';

describe('Test simple cases', () => {
  test('The count of a single-type array should be the array\'s length', () => {
    expect(countArrayTypes([1, 2, 3])).toEqual([
      {
        type: 'number',
        count: 3,
      },
    ]);
  });

  test('Arrays and objects should both count as type object', () => {
    expect(countArrayTypes([{test: 1}, [2], [3, 4]])).toEqual([
      {
        type: 'object',
        count: 3,
      },
    ]);
  });

  test('Different types should be counted correctly', () => {
    expect(countArrayTypes([{test: 1}, 2, {test: 2}, 'test'])).toEqual([
      {
        type: 'object',
        count: 2,
      },
      {
        type: 'number',
        count: 1,
      },
      {
        type: 'string',
        count: 1,
      },
    ]);
  });
});

describe('Test type overrides', () => {
  test('Number-like items should be counted as numbers', () => {
    expect(countArrayTypes(['1', '21.34', 5, {test: 1}])).toEqual([
      {
        type: 'number',
        count: 3,
      },
      {
        type: 'object',
        count: 1,
      },
    ]);
  });
});
