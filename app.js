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

app.get('/ar', (req, res) => {
	res.render('pages/ar');
})

app.get('/speechrec', (req, res) => {
	res.render('pages/speechrec');
})

app.listen(8080)