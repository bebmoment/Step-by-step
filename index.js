const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));
const mathsteps = require('mathsteps');
// const steps = mathsteps.solveEquation('2x + 3x = 35');

const mathjs = require('mathjs');
// console.log(steps.forEach());


// steps.forEach(step => {
//     console.log("before change: " + step.oldEquation.ascii());  // e.g. before change: 2x + 3x = 35
//     console.log("change: " + step.changeType);                  // e.g. change: SIMPLIFY_LEFT_SIDE
//     console.log("after change: " + step.newEquation.ascii());   // e.g. after change: 5x = 35
//     console.log("# of substeps: " + step.substeps.length);      // e.g. # of substeps: 2
// });
app.get('/', (request, response) => response.render('index'));
app.get('/about', (request, response) => response.render('about'));
app.get('/algebra', (request, response) => response.render('algebra', { solution: "" }));
app.get('/limits', (request, response) => response.render('limits'));
app.get('/derivatives', (request, response) => response.render('derivatives', { solution: "" }));

app.post('/algebra', (req, res) => {
    let solution = "";
    staps = mathsteps.solveEquation(req.body.algebruh);
    // console.log(req.body.algebruh);
    staps.forEach( (step) => {
        solution += step.oldEquation.ascii() + '<br />';
        solution += step.changeType + '<br />';
        solution += step.newEquation.ascii() + '<br />';
        // solution += step.substeps.length + '<br />';
    } )
    res.render('algebra', { solution });
    // res.json({ solution });
});

app.post('/derivatives', (req, res) => {
    diff = mathjs.derivative(req.body.derivative, 'x');
    // res.render('derivatives', {  solution: diff.args[0].value.concat(diff.args[1].name) });
    res.render('derivatives', { solution: diff.toString()});
});

const port = 3000;
app.listen(port, console.log(`Express server initialized on port ${port} `,'\n'));