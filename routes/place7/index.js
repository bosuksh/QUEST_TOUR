const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/place7')
        .get((req, res) => {
            res.render('place7');
        })

    return route;
}