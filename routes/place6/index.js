const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('/place6')
        .get((req, res) => {
            res.render('place6');
        })

    return route;
}