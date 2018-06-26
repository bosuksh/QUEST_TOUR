const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/place3')
        .get((req, res) => {
            res.render('place3');
        })

    return route;
}