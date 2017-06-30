'use strict';

function * subsets(array, offset = 0) {
    while (offset < array.length) {
        let first = array[offset++];
        for (let subset of subsets(array, offset)) {
            subset.push(first);
            yield subset;
        }
    }
    yield [];
}

module.exports = inputArray => {
    const result = [];

    for (let subset of subsets(inputArray)) {
        result.push(subset);
    }

    return result;
};
