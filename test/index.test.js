const assert = require('assert');
const math   = require('../lib');

// sums two numbers when used correctly
assert.equal(math(1, 2, '+'), 3);

// does not throw errors when used correctly
assert.doesNotThrow(() => {
	math(1, 2, '+');
});

// sums two numbers when used correctly
assert.equal(math(10, 5, '-'), 5);

// does not throw errors when used correctly
assert.doesNotThrow(() => {
	math(1, 2, '+');
	math(1, 2, '-');
});

// throws an erro when NOT used correctly
assert.throws(() => {
	math(2, 3);
}, Error);
