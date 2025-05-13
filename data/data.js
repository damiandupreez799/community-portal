// Centralized data module for the application
// This module contains the data used throughout the application, including team members, events, and announcements.
// This module exports the data as an object, which can be imported and used in other parts of the application.

// Team members data for about page
const teamMembers = [
  { name: "Thapelo", role: "Frontend" },
  { name: "Andre Scholtz", role: "Backend" },
  { name: "Damian", role: "Data Manager" }
];

// Events data for events page
const events = [
  {
    title: "Community Cleanup",
    date: "2025-06-01",
    location: "Central Park",
    image: "/images/cleanup.jpg"
  },
  {
    title: "Food Drive",
    date: "2025-06-15",
    location: "Community Hall",
    image: "/images/fooddrive.jpg"
  }
];

// Announcements data for home page
const announcements = [
  { title: "Welcome!", content: "Welcome to the new portal!" },
  { title: "Next Event", content: "Next event announced!" }
];
// Exporting the data for use in other modules
// This allows other parts of the application to import and use this data.
module.exports = { teamMembers, events, announcements };