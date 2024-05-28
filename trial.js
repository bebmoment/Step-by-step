const mathsteps = require('mathsteps');
const steps = mathsteps.solveEquation('x^2 - x - 2'); // returns empty array for a quadratic
console.log(steps);
steps.forEach(step => {
    console.log("before change: " + step.oldEquation.ascii());  // e.g. before change: 2x + 3x = 35
    console.log("change: " + step.changeType);                  // e.g. change: SIMPLIFY_LEFT_SIDE
    console.log("after change: " + step.newEquation.ascii());   // e.g. after change: 5x = 35
    console.log("# of substeps: " + step.substeps.length);      // e.g. # of substeps: 2
});

console.log(steps);