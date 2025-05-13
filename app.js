// Main Express application setup
// This file sets up the Express server, middleware, and routes for the application.

const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");// Importing the page routes
const data = require('./data/data');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));//serve static files from public directory
app.use(express.urlencoded({ extended: true }));// Parse URL-encoded bodies
app.set("view engine", "ejs");// Set EJS as the templating engine
app.set("views", path.join(__dirname, "views"));// Set the views directory

// Made data available to all views via app.locals
app.locals.teamMembers = data.teamMembers;
app.locals.events = data.events;
app.locals.announcements = data.announcements;
app.use("/", pageRoutes);// Register the page router for handling page routes

//dynamic content arrays
const events = [
  { title: "Community Meetup", date: "2025-06-01", description: "Join us for our monthly meetup!" },
  { title: "Workshop: Web Development", date: "2025-06-15", description: "Learn web dev basics." }
];

const announcements = [
  { message: "Welcome to the new portal!", date: "2025-05-13" },
  { message: "Next event announced!", date: "2025-05-10" }
];
// Start the server
// This function starts the server and listens on the specified port.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
