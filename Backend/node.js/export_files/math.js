let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

const g = 9.8;
const PI = 3.14;
const e = 2.71;

// module.exports = "Hello !";

obj = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    g: g,
    PI: PI,
    e: e
}

module.exports = obj;

/* <Second method to export>
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
module.exports.multiply = (a, b) => a * b;
module.exports.divide = (a, b) => a / b;
module.exports.g = 9.8;
module.exports.PI = 3.14;
module.exports.e = 2.71;
*/


/* <Third method to export>
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;
exports.g = 9.8;
exports.PI = 3.14;
exports.e = 2.71;
*/
