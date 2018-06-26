const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/place10')
        .get((req, res) => {
            res.render('place10');
        })

    return route;
}