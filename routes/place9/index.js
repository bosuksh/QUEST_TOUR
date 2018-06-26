const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/place9')
        .get((req, res) => {
            res.render('place9');
        })

    return route;
}