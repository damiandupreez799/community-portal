// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home', {title: 'Home'});
});

router.get('/about', (req, res) => {
    res.render('pages/about', {title: 'About Us'});
});

router.get('/events', (req, res) => {
    res.render('pages/events', {title:'Events'});
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', {title: 'Contact Us'});
});

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou', {title: 'Thank You'});
});

module.exports = router;
