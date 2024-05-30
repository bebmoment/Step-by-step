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

const math = require('mathjs');
// console.log(steps.forEach());


// steps.forEach(step => {
//     console.log("before change: " + step.oldEquation.ascii());  // e.g. before change: 2x + 3x = 35
//     console.log("change: " + step.changeType);                  // e.g. change: SIMPLIFY_LEFT_SIDE
//     console.log("after change: " + step.newEquation.ascii());   // e.g. after change: 5x = 35
//     console.log("# of substeps: " + step.substeps.length);      // e.g. # of substeps: 2
// });

app.get('/', (request, response) => response.render('index'));
app.get('/about', (request, response) => response.render('about'));
app.get('/algebra', (request, response) => response.render('algebra'));
app.get('/limits', (request, response) => response.render('limits'));
app.get('/derivatives', (request, response) => response.render('derivatives'));

app.post('/algebra', (req, res) => {
    solution = "";
    staps = mathsteps.solveEquation(req.body.algebruh);
    console.log(req.body.algebruh);
    staps.forEach( (step) => {
        solution += step.oldEquation.ascii() + '\n';
        solution += step.changeType + '\n';
        solution += step.newEquation.ascii() + '\n';
        // solution += step.substeps.length + '<br />';
    } )
    if (req.headers['content-type'] === 'application/json' ) {
        res.json({ solution });
    } else {
        res.render('result', { solution });
    }
});

const port = 3000;
app.listen(port, console.log(`Express server initialized on port ${port} `,'\n'));