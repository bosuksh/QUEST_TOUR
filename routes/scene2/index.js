const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/scene2')
        .get((req, res) => {
            res.render('scene2');
        })

    return route;
}