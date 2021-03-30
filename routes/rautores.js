module.exports = function(app, swig) {

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    });

    app.post('/autor', function (req, res) {
        let respuesta = 'Nombre: ';
        if(req.body.nombre !== undefined)
            respuesta += req.body.nombre;
        else
            respuesta += 'Nombre no enviado en la petición';
        respuesta += '<br>' + 'Grupo: ';
        if(req.body.grupo !== undefined)
            respuesta += req.body.grupo;
        else
            respuesta += 'Grupo no enviado en la petición';
        respuesta += '<br>' + 'Rol: ';
        if(req.body.rol !== undefined)
            respuesta += req.body.rol;
        else
            respuesta += 'Rol no enviado en la petición';

        res.send(respuesta);

    });

    app.get("/autores", function(req, res) {

        let autores = [ {
            "nombre" : "John Frusciante",
            "grupo" : "Red Hot Chili Peppers",
            "rol" : "Guitarrista"
        }, {
            "nombre" : "Jack Bruce",
            "grupo" : "Cream",
            "rol" : "Bajista"
        }, {
            "nombre" : "Axl Rose",
            "grupo" : "Guns n Roses",
            "rol" : "Cantante"
        } ];

        let respuesta = swig.renderFile('views/autores.html', {
            autores : autores
        });

        res.send(respuesta);

    });

    app.get("/autores/*", function (req, res) {

        res.redirect('views/autores.html', {

        });

    });

};