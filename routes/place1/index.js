const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/place1')
        .get((req, res) => {
            res.render('place1');
        })

    return route;
}