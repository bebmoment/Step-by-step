/*
 * Test file that Ben uses before he implements anything new
 */

const {PythonShell} = require('python-shell', 'text');
const options = {
    mode: 'text',
    pythonOptions: ['-u'],
    args: ['sin(x)/x', 'x', '0']
}
PythonShell.run('limit.py', options).then(results => console.log(results))