const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/scene4_Who')
        .get((req, res) => {
            res.render('scene4_Who');
        })

    return route;
}