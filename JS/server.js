var static = require('node-static');

//Se crea una instancia del servidor node-static
//en la carpeta raiz del proyecto

var file = new static.Server('./../');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8080);