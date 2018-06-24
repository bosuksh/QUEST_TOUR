const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/answer')
        .get((req, res) => {
            res.render('answer');
        })

    return route;
}