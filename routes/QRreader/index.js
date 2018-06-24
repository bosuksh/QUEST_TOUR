const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/QRreader')
        .get((req, res) => {
            res.render('QRreader');
        })

    return route;
}