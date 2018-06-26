const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/place5')
        .get((req, res) => {
            res.render('place5');
        })

    return route;
}