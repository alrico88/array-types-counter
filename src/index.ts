import {isNumber} from 'number-helper-functions';
import {orderBy} from 'lodash';

/**
 * TypeCount class
 *
 * @class TypeCount
 */
class TypeCount {
  public type: string;
  public count: number;

  /**
   * Creates an instance of TypeCount.
   * @param {string} type
   * @param {number} count
   * @memberof TypeCount
   */
  public constructor(type: string, count: number) {
    this.type = type;
    this.count = count;
  }
}

type CountObj = Record<string, number>;

/**
 * Counts the array's item types
 *
 * @export
 * @param {any[]} array
 * @return {TypeCount[]}  The array item types ordered by count, descending
 */
export function countArrayTypes(array: any[]): TypeCount[] {
  const countObj: CountObj = array.reduce((agg, item) => {
    let type = typeof item;

    if (type === 'string' && isNumber(item)) {
      type = 'number';
    }

    if (agg[type] == null) {
      agg[type] = 1;
    } else {
      agg[type]++;
    }

    return agg;
  }, {});

  return orderBy(Object.entries(countObj).map(([type, count]) => new TypeCount(type, count)), 'count', 'desc');
}
