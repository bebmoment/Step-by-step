/*
 * Perhaps I should just rebrand this to Algebruh, it's a much more recognizable and funnier name
 */

// Setup
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mathsteps = require('mathsteps');
const mathjs = require('mathjs');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

/* Example parsing of the steps
const steps = mathsteps.solveEquation('2x + 3x = 35');
steps.forEach(step => {
    console.log("before change: " + step.oldEquation.ascii());  // e.g. before change: 2x + 3x = 35
    console.log("change: " + step.changeType);                  // e.g. change: SIMPLIFY_LEFT_SIDE
    console.log("after change: " + step.newEquation.ascii());   // e.g. after change: 5x = 35
    console.log("# of substeps: " + step.substeps.length);      // e.g. # of substeps: 2
});
*/

// Initial Rendering
app.get('/', (request, response) => response.render('index'));
app.get('/about', (request, response) => response.render('about'));
app.get('/algebra', (request, response) => response.render('algebra', { solution: "" }));
app.get('/limits', (request, response) => response.render('limits', { solution: ""}));
app.get('/derivatives', (request, response) => response.render('derivatives', { solution: "" }));

// Post requests and processing
app.post('/algebra', (req, res) => {
    let solution = "";
    let staps = mathsteps.solveEquation(req.body.algebruh);
    staps.forEach( (step) => {
        solution += step.oldEquation.ascii() + '<br />';
        solution += step.changeType + '<br />';
        solution += step.newEquation.ascii() + '<br />';
    } )
    res.render('algebra', { solution });
});

app.post('/derivatives', (req, res) => {
    const diff = mathjs.derivative(req.body.derivative, req.body.wrt);
    res.render('derivatives', { solution: diff.toString()});
});
/* WIP LIMIT PROCESSING
app.post('/limits', (req, res) => {
    const variable = req.body.wrt;
    res.render('limits', { solution: mathjs.evaluate(req.body.limit, {x: req.body.index} ) } )
})
*/

// Placeholder limit message
app.post('/limits', (req, res) => {
    res.render('limits', { solution: "Not yet available"})
})

// Initialization message
const port = 3000;
app.listen(port, console.log(`Express server initialized on port ${port} `,'\n'));