# ZOOM
A full-stack clone of the Zerodha trading platform, featuring a backend API (Node.js/Express/MongoDB), a user dashboard (React), and a marketing/landing frontend (React). This project demonstrates a modern brokerage platform with portfolio management, order placement, and educational resources.

## TABLE OF CONTENTS
- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Backend API](#backend-api)
- [Frontend & Dashboard](#frontend--dashboard)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## FEATURES
- **Backend API**: RESTful endpoints for holdings, positions, and orders (Node.js, Express, MongoDB).
- **User Dashboard**: Real-time portfolio, watchlist, order management, funds, and summary (React).
- **Landing Frontend**: Marketing pages, product showcase, pricing, about, and support (React).
- **Buy/Sell Modal**: Place buy/sell orders directly from the dashboard.
- **Watchlist**: Track favorite stocks with quick actions.
- **Responsive UI**: Modern, mobile-friendly design using Bootstrap and Material UI.

---
## PROJECT STRUCTURE
```
Zerodha/
  backend/         # Node.js/Express API server
    model/         # Mongoose models
    schema/        # Mongoose schemas
    index.js       # Main server file
    package.json   # Backend dependencies
  dashboard/       # React user dashboard
    src/components # Dashboard React components
    src/data       # Sample data for watchlist, holdings, etc.
    public/        # Static assets (logo, index.html)
    package.json   # Dashboard dependencies
  frontend/        # React marketing/landing site
    src/landing    # Landing page, products, about, support, etc.
    public/media   # Images and branding assets
    package.json   # Frontend dependencies
```

---

## TECH STACK
- **Backend**: Node.js, Express, MongoDB, Mongoose, dotenv, passport (for future auth)
- **Dashboard**: React, React Router, Axios, Material UI, Chart.js
- **Frontend**: React, React Router, Bootstrap

---

## SETUP & INSTALLATION

### PREREQUISITES
- Node.js (v18+ recommended)
- npm
- MongoDB (local or Atlas)

### 1. CLONE THE REPOSITORY
```bash
git clone <repo-url>
cd Zerodha
```

### 2. BACKEND SETUP
```bash
cd backend
npm install
npm start
```

### 3. DASHBOARD SETUP
```bash
cd ../dashboard
npm install
npm start
```
