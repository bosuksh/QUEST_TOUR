const express = require('express');
const app = express();
const pug = require('pug');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', './views');
app.use('/assets/', express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));


const place = require('./routes/place')(app);
const scene1 = require('./routes/scene1')(app);
const scene2 = require('./routes/scene2')(app);
const scene3 = require('./routes/scene3')(app);
app.use(scene1);
app.use(scene2);
app.use(scene3);
app.use(place);


app.get('/', (req, res) => {
    res.redirect('/scene1');
})

app.listen(3000, () => {
    console.log("start web app!")
})