# 🍋 Little Lemon Restaurant — Reserve a Table

A React web application for the Little Lemon Mediterranean restaurant that allows customers to reserve a table online. Built as the capstone project for the Meta Front-End Developer Professional Certificate.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Running the App](#running-the-app)
- [Running Unit Tests](#running-unit-tests)
- [Project Structure](#project-structure)
- [Accessibility](#accessibility)
- [UX UI Design](#ux-ui-design)

---

## About the Project

Little Lemon is a family owned Mediterranean restaurant in Chicago. This web app solves the problem of customers not being able to reserve a table online. The reserve-a-table feature allows customers to:

- View available time slots for a selected date
- Submit a booking with date, time, number of guests and occasion
- Receive a booking confirmation

---

## Features

✅ **Homepage** — Hero banner, weekly specials, testimonials and about section

✅ **Booking Form** — Full controlled form with:
- Date picker with past date prevention
- Available times fetched from API based on selected date
- Number of guests with min/max validation (1-10)
- Occasion selector (Birthday, Anniversary, Engagement)
- Submit button with visual disabled state when form is invalid

✅ **Form Validation** — HTML5 and React client-side validation with inline error messages

✅ **Booking Confirmation** — Success page shown after API submission

✅ **Accessibility** — ARIA labels, semantic HTML, role="alert" on errors

✅ **Responsive Design** — Works on desktop, tablet and mobile

✅ **Unit Tests** — 21 tests covering form validation, HTML5 attributes and reducer functions

---

## Technologies Used

- **React 18** — Component-based UI library
- **React Router DOM v6** — Client-side routing
- **Jest** — Test runner
- **React Testing Library** — Component testing utilities
- **CSS3** — Custom properties, Grid, Flexbox
- **Google Fonts** — Markazi Text and Karla typefaces

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** version 14 or higher
- **npm** version 6 or higher

Check your versions by running:

```bash
node --version
npm --version
```

Download Node.js from [nodejs.org](https://nodejs.org) if not installed.

---

## Running the App

### Step 1 — Clone the repository

```bash
git clone https://github.com/yourusername/little-lemon.git
```

### Step 2 — Navigate into the project folder

```bash
cd little-lemon
```

### Step 3 — Install dependencies

```bash
npm install
```

### Step 4 — Start the development server

```bash
npm start
```

The app will open automatically in your browser at:

```
http://localhost:3000
```

---

## Running Unit Tests

Run all unit tests with:

```bash
npm test
```

Press **A** to run all tests at once.

Press **Q** to quit watch mode.

### Test coverage

The project includes **21 unit tests** across two test files:

**BookingForm.test.js — 18 tests:**
- HTML5 validation attributes (required, min, max, type)
- Submit button disabled state when form is invalid
- Submit button enabled state when form is valid
- Inline error messages for each validation rule
- submitForm called with correct data on valid submission
- submitForm not called when form is invalid
- Available times rendered as select options
- dispatch called when date changes

**Main.test.js — 3 tests:**
- initializeTimes returns non-empty array from API
- updateTimes returns updated times for selected date
- updateTimes returns same state for unknown action

---

## Project Structure

```
little-lemon/
├── public/
│   ├── index.html          # HTML template with API script
│   ├── logo.png            # Little Lemon logo
│   ├── hero-image.jpg      # Hero section background
│   ├── about-1.jpg         # About section image
│   └── about-2.jpg         # About section image
├── src/
│   ├── components/
│   │   ├── App.js                  # Root component with Router
│   │   ├── Nav.js                  # Navigation bar
│   │   ├── Main.js                 # Routes and state management
│   │   ├── Footer.js               # Footer component
│   │   ├── Homepage.js             # Homepage layout
│   │   ├── CallToAction.js         # Hero banner section
│   │   ├── Specials.js             # Weekly specials section
│   │   ├── CustomersSay.js         # Testimonials section
│   │   ├── Chicago.js              # About section
│   │   ├── BookingPage.js          # Booking page wrapper
│   │   ├── BookingForm.js          # Controlled booking form
│   │   ├── ConfirmedBooking.js     # Booking confirmation page
│   │   ├── bookingUtils.js         # initializeTimes and updateTimes
│   │   ├── BookingForm.test.js     # BookingForm unit tests
│   │   └── Main.test.js            # Reducer function unit tests
│   ├── App.css             # Base styles
│   ├── styles.css          # Component styles
│   └── index.js            # React DOM entry point
└── package.json            # Dependencies and scripts
```

---

## Accessibility

The application follows WCAG 2.0 guidelines across all four principles:

**Perceivable**
- All images have descriptive alt text
- Form fields have associated label elements using htmlFor
- Error messages use role="alert" to announce to screen readers
- Color is never the only means of conveying information

**Operable**
- All interactive elements are keyboard accessible
- Navigation is consistent across all pages
- Sufficient touch target sizes on mobile (minimum 44x44px)

**Understandable**
- Plain language error messages guide users to fix problems
- Form fields have placeholder text and hint text
- Consistent navigation and button styles throughout

**Robust**
- Semantic HTML elements throughout — header, nav, main, footer, section, form
- ARIA attributes including aria-label, aria-required, aria-describedby and aria-invalid
- Submit button has aria-label="On Click" as required by the course specification

---

## UX UI Design

The design was created in Figma following the Little Lemon brand style guide:

**Brand Colors**
- Primary Green: `#495E57`
- Primary Yellow: `#F4CE14`
- Secondary Salmon: `#EE9972`

**Typography**
- Headings: Markazi Text (Google Fonts)
- Body: Karla (Google Fonts)

**Design Process**
1. User research and persona creation (Sarah Mitchell)
2. User journey mapping identifying pain points
3. Low fidelity wireframes in Figma
4. High fidelity prototype with brand styling
5. Heuristic evaluation using Nielsen's 10 usability heuristics
6. React implementation matching the approved Figma design

---

## API

The app uses the Little Lemon Booking API loaded via script tag in index.html:

```html
<script src="https://raw.githubusercontent.com/courseraap/test/main/booking.js"></script>
```

**fetchAPI(date)** — accepts a Date object and returns an array of available reservation times for that date.

**submitAPI(formData)** — accepts booking form data and returns true if the booking was successfully submitted.

---

## Git Repository

The project is version controlled with Git and hosted on GitHub.

All changes have been committed with descriptive commit messages throughout development tracking the complete build process from initial setup through to final submission.

---

## License

This project was built as part of the Meta Front-End Developer Professional Certificate capstone assessment.
