const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('pages/index');
})

app.get('/cam', (req, res) => {
	res.render('pages/cam');
})

app.get('/vr', (req, res) => {
	res.render('pages/vr');
})

app.listen(8080)