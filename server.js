var express = require('express');
var hbs = require('hbs');
require('./hbs/helpers');
const app = express()

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');




app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'miguel arredondo'
    });
})

app.get('/about', function(req, res) {

    res.render('about');
})

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));