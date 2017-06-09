const assert = require('assert');
const math   = require('../');

// sums two numbers when used correctly
assert.equal(math(1, 2, '+'), 3);

// does not throw errors when used correctly
assert.doesNotThrow(() => {
	math(1, 2, '+');
});

// throws an erro when NOT used correctly
assert.throws(() => {
	math(2, 3);
}, Error);