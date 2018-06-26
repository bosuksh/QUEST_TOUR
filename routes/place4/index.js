const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/place4')
        .get((req, res) => {
            res.render('place4');
        })

    return route;
}