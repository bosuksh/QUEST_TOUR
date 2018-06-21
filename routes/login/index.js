const express = require('express');
const route = express.Router();

module.exports = (app) => {
    route.route('login')
        .get((req, res) => {
            res.render('login');
        })
}