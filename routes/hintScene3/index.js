const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene3')
        .get((req, res) => {
            res.render('hintScene3');
        })

    return route;
}