// @flow
import {add} from './utils/add.js';
import {nth} from 'lodash/nth';

const a = 123;
const b = 456;
const c = add(a, b);
console.log(c);
const first = nth(['a', 'b', 'c'], 0);
console.log(first)