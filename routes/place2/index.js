const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/place2')
        .get((req, res) => {
            res.render('place2');
        })

    return route;
}