const http = require('http');

http.createServer((request, response) => {
        //response.write('Hola mundo');
        let salida = {
            nombre: 'Miguel',
            edad: 35,
            url: request.url
        }
        response.write(JSON.stringify(salida));
        response.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');