const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/algebra', (req, res) => res.render('algebra'));
app.get('/limits', (req, res) => res.render('limits'));
app.get('/derivatives', (req, res) => res.render('derivatives'));

const port = 3000;
app.listen(port, console.log(`Express server initialized on port ${port} `,'\n'));
