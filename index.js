const express = require('express');
const app = express();
const PORT = process.env.PORT;
const pug = require('pug');
const session = require('express-session');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', './views');
app.use('/assets/', express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));

//app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { 
      secure: true 
  }
}))

const place = require('./routes/place')(app);
const scene1 = require('./routes/scene1')(app);
const scene2 = require('./routes/scene2')(app);
const scene3_1 = require('./routes/scene3_1')(app);
const scene3_2 = require('./routes/scene3_2')(app);
//const scene3_3 = require('./routes/scene3_3')(app);
const scene4_Who = require('./routes/scene4_Who')(app);
const scene4_When = require('./routes/scene4_When')(app);
const scene4_Where = require('./routes/scene4_Where')(app);
const hintScene1 = require('./routes/hintScene1')(app);
const hintScene2 = require('./routes/hintScene2')(app);
const hintScene3 = require('./routes/hintScene3')(app);
const hintScene4 = require('./routes/hintScene4')(app);
const hintScene5 = require('./routes/hintScene5')(app);
const hintScene6 = require('./routes/hintScene6')(app);
const hintScene7 = require('./routes/hintScene7')(app);
const hintScene8 = require('./routes/hintScene8')(app);
const hintScene9 = require('./routes/hintScene9')(app);
const hintScene10 = require('./routes/hintScene10')(app);
const hintScene11 = require('./routes/hintScene11')(app);
const hintScene12 = require('./routes/hintScene12')(app);
const hintScene13 = require('./routes/hintScene13')(app);
const hintScene14 = require('./routes/hintScene14')(app);
const hintScene15 = require('./routes/hintScene15')(app);
const hintScene16 = require('./routes/hintScene16')(app);
const hintScene17 = require('./routes/hintScene17')(app);
const hintScene18 = require('./routes/hintScene18')(app);
const hintScene19 = require('./routes/hintScene19')(app);
const hintScene20 = require('./routes/hintScene20')(app);
const hintScene21 = require('./routes/hintScene21')(app);
const hintScene22 = require('./routes/hintScene22')(app);
const hintScene23 = require('./routes/hintScene23')(app);
const hintScene24 = require('./routes/hintScene24')(app);
const hintScene25 = require('./routes/hintScene25')(app);
const place1 = require('./routes/place1')(app);
const place2 = require('./routes/place2')(app);
const place3 = require('./routes/place3')(app);
const place4 = require('./routes/place4')(app);
const place5 = require('./routes/place5')(app);
const place6 = require('./routes/place6')(app);
const place7 = require('./routes/place7')(app);
const place8 = require('./routes/place8')(app);
const place9 = require('./routes/place9')(app);
const place10 = require('./routes/place10')(app);


const answer = require('./routes/answer')(app);
const QRreader = require('./routes/QRreader')(app);
const login = require('./routes/login')(app);

app.use(scene1);
app.use(scene2);
app.use(scene3_1);
app.use(scene3_2);
//app.use(scene3_3);
app.use(scene4_Who);
app.use(scene4_When);
app.use(scene4_Where);
app.use(place);
app.use(hintScene1);
app.use(hintScene2);
app.use(hintScene3);
app.use(hintScene4);
app.use(hintScene5);
app.use(hintScene6);
app.use(hintScene7);
app.use(hintScene8);
app.use(hintScene9);
app.use(hintScene10);
app.use(hintScene11);
app.use(hintScene12);
app.use(hintScene13);
app.use(hintScene14);
app.use(hintScene15);
app.use(hintScene16);
app.use(hintScene17);
app.use(hintScene18);
app.use(hintScene19);
app.use(hintScene20);
app.use(hintScene21);
app.use(hintScene22);
app.use(hintScene23);
app.use(hintScene24);
app.use(hintScene25);

app.use(place1);
app.use(place2);
app.use(place3);
app.use(place4);
app.use(place5);
app.use(place6);
app.use(place7);
app.use(place8);
app.use(place9);
app.use(place10);


app.use(answer);
app.use(login);
app.use(QRreader);


app.get('/', (req, res) => {
    res.redirect('/login');
})

app.listen(3000, () => {
    console.log("start web app!")
})
