const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/scene4_Where')
        .get((req, res) => {
            res.render('scene4_Where');
        })

    return route;
}