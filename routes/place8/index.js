const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/place8')
        .get((req, res) => {
            res.render('place8');
        })

    return route;
}