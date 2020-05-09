const express = require('express');
//modulo de express para poder tener las rutas en otro archivo diferente
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', { title: 'IMEVA' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contacta con IMEVA' });
});

//para que este archivo pueda ser leido desde el index de nuestra web
module.exports = router;