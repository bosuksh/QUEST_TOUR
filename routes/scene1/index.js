const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/scene1')
        .get((req, res) => {
            res.render('scene1');
        })

    return route;
}