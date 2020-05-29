var hbs = require('hbs');

//helpers de HBS
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((element, i) => {
        palabras[i] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});