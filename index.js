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
const scene3_1 = require('./routes/scene3_1')(app);
const scene3_2 = require('./routes/scene3_2')(app);
//const scene3_3 = require('./routes/scene3_3')(app);
const scene4 = require('./routes/scene4')(app);
const hintScene = require('./routes/hintScene')(app);

app.use(scene1);
app.use(scene2);
app.use(scene3_1);
app.use(scene3_2);
//app.use(scene3_3);
app.use(scene4);
app.use(place);
app.use(hintScene);


app.get('/', (req, res) => {
    res.redirect('/scene1');
})

app.listen(3000, () => {
    console.log("start web app!")
})