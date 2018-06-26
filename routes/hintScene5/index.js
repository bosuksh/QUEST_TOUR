const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene5')
        .get((req, res) => {
            res.render('hintScene5');
        })

    return route;
}