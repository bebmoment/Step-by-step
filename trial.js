/*
 * Test file that Ben uses before he implements anything new
 */

const mathsteps = require('mathsteps');
const mathjs = require('mathjs');
// const steps = mathsteps.simplifyExpression('(x+1)(x-1)/(x+1)'); // returns empty array for a quadratic
// console.log(steps);
// steps.forEach(step => {
// 	console.log("before change: " + step.oldNode.toString());   // before change: 2 x + 2 x + x + x
// 	console.log("change: " + step.changeType);                  // change: ADD_POLYNOMIAL_TERMS
// 	console.log("after change: " + step.newNode.toString());    // after change: 6 x
// 	console.log("# of substeps: " + step.substeps.length);      // # of substeps: 3
// });

const diff = mathjs.derivative('x^2', 'y');
// console.log(diff.toString());
// console.log(diff.args[0].value.concat(diff.args[1].name));
// console.log(mathjs.derivative(mathjs.parse('x^3'),'x').toString);
console.log(diff);