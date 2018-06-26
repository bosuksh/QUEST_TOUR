const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene23')
        .get((req, res) => {
            res.render('hintScene23');
        })

    return route;
}