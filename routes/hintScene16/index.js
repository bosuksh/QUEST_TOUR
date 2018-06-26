const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/hintScene16')
        .get((req, res) => {
            res.render('hintScene16');
        })

    return route;
}