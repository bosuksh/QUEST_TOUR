const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene14')
        .get((req, res) => {
            res.render('hintScene14');
        })

    return route;
}