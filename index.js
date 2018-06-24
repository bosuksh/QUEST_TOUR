const express = require('express');
const app = express();
const pug = require('pug');
const session = require('express-session');
const bodyParser = require('body-parser');
//const Instascan = require('instascan');

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
const hintScene = require('./routes/hintScene')(app);
const answer = require('./routes/answer')(app);
//const QRreader = require('./routes/QRreader')(app);
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
app.use(hintScene);
app.use(answer);
app.use(login);
//app.use(QRreader)


app.get('/', (req, res) => {
    res.redirect('/scene1');
})

app.listen(3000, () => {
    console.log("start web app!")
})
