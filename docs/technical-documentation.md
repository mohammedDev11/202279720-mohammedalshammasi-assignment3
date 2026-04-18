# Technical Documentation – Assignment 3

## Overview

This document explains the technical implementation of the portfolio website in Assignment 3. The project is built using HTML, CSS, and JavaScript, with added advanced functionality such as API integration, state management, and improved logic handling.

---

## Application Structure

The project is organized into the following main files:

- index.html → structure of the website  
- css/styles.css → styling and layout  
- js/script.js → all interactive logic and functionality  

---

## Key Features and Implementation

### 1. Theme Management

The website supports dark and light mode.

- The selected theme is stored in localStorage
- When the page loads, the saved theme is applied automatically
- The UI updates dynamically when toggling the theme

---

### 2. Greeting System

A greeting message is displayed based on the current time of day.

- Morning, afternoon, evening, or night messages
- Implemented using JavaScript Date object

---

### 3. Visitor State Management

Users can enter their name:

- The name is saved in localStorage
- It is restored when the user revisits the site
- Users can also clear the saved name

---

### 4. Time Counter

A live timer tracks how long the user stays on the website.

- Updates every second using setInterval
- Displays time in seconds, minutes, and hours format

---

### 5. Project Filtering and Sorting

Projects section includes advanced logic:

- Filter by category (UI, Web, Mobile)
- Sort projects by title (ascending / descending)
- Filter by difficulty level (Beginner / Advanced)

The selected options are stored in localStorage and restored on reload.

---

### 6. GitHub API Integration

The website fetches live data from GitHub:

- Uses the GitHub REST API
- Fetches repositories dynamically
- Displays:
  - repository name
  - description
  - language
  - stars and forks

Error handling is included in case the API request fails.

---

### 7. Contact Form Validation

The form includes multiple validation checks:

- Name must not be empty and must be at least 2 characters
- Email must follow a valid format
- Message must:
  - be at least 15 characters
  - contain at least 3 words
- Checkbox confirmation is required

Feedback messages are shown dynamically.

---

### 8. Scroll Reveal Animation

Sections animate when entering the viewport:

- Implemented using IntersectionObserver
- Improves user experience and visual feedback

---

## Performance Improvements

The following optimizations were applied:

- Lazy loading for project images
- Reduced repeated JavaScript logic
- Organized code into modular functions
- Clean and efficient DOM updates

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- GitHub API
- LocalStorage API
- IntersectionObserver API

---

## Notes

This is a frontend-only project. No backend or database is used.
