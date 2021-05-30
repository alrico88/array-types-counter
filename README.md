# array-types-counter

Simple helper to obtain the count of different array item's types.

## Installation

Using npm, `npm i array-types-counter`.

Using yarn, `yarn add array-types-counter`.

## Usage

Using `import`

```javascript
import { countArrayTypes } from 'array-types-counter';

const array = [1, 2, 'three', [1, 2, 3]];

const counts = countArrayTypes(array);

// counts is [{type: 'number', count: 2}, {type: 'string', count: 1}, {type: 'object', count: 1}]
```

In a CommonJS environment

```javascript
const { countArrayTypes } = require('array-types-counter');

const array = [1, 2, '3', [1, 2, 3]]; // Strings that can be casted to numbers, count as numbers

const counts = countArrayTypes(array);

// counts is [{type: 'number', count: 3}, {type: 'object', count: 1}]
```

## Table of contents

### Functions

- [countArrayTypes](modules.md#countarraytypes)

## Functions

### countArrayTypes

▸ **countArrayTypes**(`array`: _any_[]): TypeCount[]

Counts the array's item types

**`export`**

#### Parameters:

| Name    | Type    |
| :------ | :------ |
| `array` | _any_[] |

**Returns:** TypeCount[]

The array item types ordered by count, descending

Defined in: [index.ts:34](https://github.com/alrico88/array-types-counter/blob/b562c59/src/index.ts#L34)
