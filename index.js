const sum = require('./sum.op');

function math (x, y, op) {
	switch (op) {
		case '+':
			return sum(x, y);
		default:
			throw new Error("Unsupported operation.");
	}
}

module.exports = math;