const nodeStatic = require('node-static');

const file = new nodeStatic.Server('./dist');
require('http').createServer((req, res) => {
    req.addListener('end', () => {
        file.serve(req, res);
    }).resume();
}).listen(8080);