# ZOOM
A full-stack clone of the Zoom platform, featuring a backend API (Node.js/Express/MongoDB), a user dashboard (React), and a marketing/landing frontend (React). This project demonstrates a real-time video conferencing with multiple participants to deliver a seamless and responsive video chat experience.

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
- **Backend API**: RESTful endpoints for video call and chatting (Node.js, Express, MongoDB).
- **Landing Frontend**: Real-time communication and video call history (React).
- **Responsive UI**: Modern, mobile-friendly design using Bootstrap.

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

### 4. FRONTEND SETUP
```bash
cd ../frontend
npm install
npm start
```

---

## ENVIRONMENT VARIABLES
- **backend/.env**
  - `DATABASE_URL` — MongoDB connection string (e.g., `mongodb://localhost:27017/zerodha`)
  - `PORT` (optional) — Port for backend server (default: 8080)

---

## BACKEND API

### ENDPOINTS
- `GET /allHoldings` — List all holdings
- `GET /allPositions` — List all positions
- `GET /allOrders` — List all orders
- `POST /newOrder` — Place a new order
  - Body: `{ name, qty, price, mode }`

#### DATA MODELS
- **Holding**: `{ name, qty, avg, price, net, day }`
- **Order**: `{ name, qty, price, mode }`
- **Position**: `{ product, name, qty, avg, price, net, day, isLoss }`

---

## FRONTEND & DASHBOARD

### DASHBOARD FEATURES
- **Watchlist**: Search and track stocks, quick buy/sell
- **Holdings**: View all holdings, P&L, net change
- **Positions**: Open positions, real-time updates
- **Orders**: List of all orders placed
- **Funds**: Margin, cash, and collateral overview
- **Summary**: Portfolio summary and quick stats
- **Apps**: Placeholder for integrations

### LANDING FRONTEND
- **Home**: Hero, stats, pricing, education, open account
- **Products**: Kite, Console, Coin, Kite Connect API, Varsity
- **About**: Company info, team
- **Pricing**: Brokerage and account opening
- **Support**: Help and ticketing

---

## LICENSE
This project is for educational/demo purposes only and is not affiliated with Zerodha.
