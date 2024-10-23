const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.use(express.static('assests'));

app.get('/', (req, res) => {
    res.render('resumen', {
        nombre: 'Alex',
        titulo: 'Portfolio'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        nombre: 'Alex',
        titulo: 'Portfolio'
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  

