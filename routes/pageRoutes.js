const express = require('express');
const router = express.Router();
const { teamMembers, events, announcements } = require('../data/data');// Importing data arrays for use in route handlers
const contactMessages = [];// Array to store contact messages

// Set up the router to handle requests to the root URL

//home page
router.get('/home', (req, res) => {
    res.render('pages/home', { announcements });
});

//about page
router.get('/about', (req, res) => {
    res.render("pages/about", { team: teamMembers });
});
//index page
router.get('/', (req, res) => {
    res.redirect('/home');
});

//events page
router.get('/events', (req, res) => {
    res.render("pages/events", { events });
});

// Show contact form
router.get('/contact', (req, res) => {
    res.render("pages/contact");
});

// Handle contact form submission
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    contactMessages.push({ name, email, message, timestamp: new Date() });
    res.redirect('/thankyou');
});

//thankyou page
router.get('/thankyou', (req, res) => {
    res.render("pages/thankyou");
});

module.exports = router;