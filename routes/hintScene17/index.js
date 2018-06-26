const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene17')
        .get((req, res) => {
            res.render('hintScene17');
        })

    return route;
}