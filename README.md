# Mohammed Alshammasi Portfolio – Assignment 3

## Project Description

This project is the third phase of my portfolio website for the Web Development course. It builds on the previous assignments by improving the website with more advanced JavaScript functionality, external API integration, state management, and better overall structure.

The portfolio presents my profile as a junior Software Engineering student and highlights sample projects, strengths, and a contact form in a modern responsive layout.

In this phase, the website was upgraded to include:
- live GitHub repository data using the GitHub API
- more advanced project filtering and sorting logic
- visitor state management using localStorage
- a time-on-site counter
- stronger contact form validation
- performance-focused improvements such as lazy-loaded project images and cleaner JavaScript structure

---

## Features Implemented

### 1. Responsive Portfolio Layout
The website keeps a responsive structure that works across desktop, tablet, and mobile screens.

### 2. Theme Toggle with Persistence
Users can switch between dark mode and light mode. Their choice is saved in `localStorage`, so the selected theme remains active when they return to the site.

### 3. Greeting Message
The hero section shows a greeting based on the current time of day.

### 4. Visitor Name Memory
Users can enter their name in the hero section. The website saves it in `localStorage` and displays a personalized message when they return.

### 5. Time on Site Counter
A live counter shows how long the visitor has stayed on the site.

### 6. Advanced Project Logic
The Projects section supports:
- filtering by category
- sorting by title
- conditional display based on selected visitor level

This combines multiple conditions and shows more advanced application logic.

### 7. GitHub API Integration
The portfolio connects to the GitHub API and fetches live repository data from my GitHub account. The repositories are displayed dynamically, and a reload button is included.

### 8. Contact Form Validation
The form checks:
- name is not empty
- name length is valid
- email is in a valid format
- message is long enough
- message contains enough words
- checkbox confirmation is selected

### 9. Scroll Reveal Animation
Sections animate into view as the user scrolls.

---

## Folder Structure

```bash
202279720-mohammedalshammasi-assignment3/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
