const express = require('express');
const router = express.Router();

const { teamMembers, events, announcements, contacts} = require('../data/data');// Importing data arrays for use in route handlers

// Set up the router to handle requests to the root URL

//home page
router.get('/home', (req, res) => {
    res.render('pages/home', { announcements, title: 'Home' });
});

//about page
router.get('/about', (req, res) => {
    res.render("pages/about", { team: teamMembers, title: 'About Us' });
});
//index page
router.get('/', (req, res) => {
    res.redirect('/home');
});

//events page
router.get('/events', (req, res) => {
    res.render("pages/events", { events, title: 'Events' });
});

// Show contact form
router.get('/contact', (req, res) => {
    res.render("pages/contact", { title: 'Contact' });
});

// Handle contact form submission
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (name && email && message) {
        contacts.push({ name, email, message, timestamp: new Date() });
        console.log("New contact submission:", contacts);
        res.render('pages/thankyou', {
            submission: { name, email, message }
        });
    } else {
        res.status(400).send("All fields are required.");
    }
});

//thankyou page
router.get('/thankyou', (req, res) => {
    res.render("pages/thankyou", { title: 'Thank You' });
});

module.exports = router;