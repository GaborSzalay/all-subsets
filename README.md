# all-subsets

[![NPM version](https://img.shields.io/npm/v/all-subsets.svg)](https://www.npmjs.com/package/all-subsets)

Returns all the subsets of the given array

## How to use

- Add it to your node app via either ```yarn add all-subsets``` or ```npm install --save all-subsets```
```
const allSubsets = require('all-subsets');

allSubsets([1]);                //[[1], []]

allSubsets([4, 7]);             //[[7, 4], [4], [7], []]

allSubsets([2, 5, 'foo']);      //[["foo", 5, 2], [5, 2], ["foo", 2], [2], ["foo", 5], [5], ["foo"], []]

allSubsets(['foo', 'bar']);     //[["bar", "foo"], ["foo"], ["bar"], []]
```
