const sum      = require('./sum.op');
const subtract = require('./subtract.op');

function math (x, y, op) {
	switch (op) {
		case '+':
			return sum(x, y);
			case '-':
				return subtract(x, y);
		default:
			throw new Error("Unsupported operation.");
	}
}

module.exports = math;
