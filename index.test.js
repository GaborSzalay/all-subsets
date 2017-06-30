'use strict';

const allSubsets = require('./index');

describe('allSsubsets', function() {
    const testCases = [
        {
            input: [1],
            expected: [[1], []]
        },
        {
            input: [4, 7],
            expected: [[7, 4], [4], [7], []]
        },
        {
            input: [2, 5, 'foo'],
            expected: [["foo", 5, 2], [5, 2], ["foo", 2], [2], ["foo", 5], [5], ["foo"], []]
        },
        {
            input: ['foo', 'bar'],
            expected: [["bar", "foo"], ["foo"], ["bar"], []]
        },
    ];

    testCases.forEach(({ input, expected }) => {
        it(`should return the subsets of ${input}`, () => {
            let subSets = allSubsets(input);

            expect(subSets).toEqual(expected);
        });
    });
});
