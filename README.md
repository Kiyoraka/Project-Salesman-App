# Salesman PWA

A Progressive Web Application (PWA) for field sales management. Built with vanilla HTML, CSS, and JavaScript - no frameworks required.

## Overview

Salesman PWA is a mobile-first application designed for field sales representatives to manage their daily operations including invoicing, delivery orders, customer management, inventory tracking, and performance monitoring.

## Features

### 13 Core Modules

| Module | Description |
|--------|-------------|
| **Dashboard** | Overview with stats, quick actions, and recent activity |
| **Invoice** | Create and manage sales invoices with PDF export |
| **D/O (Delivery Order)** | Track deliveries with digital signature support |
| **Unpaid** | Monitor outstanding payments with aging filters |
| **Reseller** | Customer database with search and GPS location |
| **Schedule** | Visit appointments with calendar and list views |
| **Stock** | Inventory management with low stock alerts |
| **Return** | Product return requests with approval workflow |
| **Daily Report** | Submit daily activity reports with photo upload |
| **Ranking** | Salesman leaderboard with badges |
| **GPS** | Location tracking with check-in/out functionality |
| **Registration** | New salesman onboarding |
| **Notification** | Push notifications for important updates |
| **Setting** | App preferences and profile management |

### PWA Features

- Installable on mobile devices
- Offline support with service worker
- Native app-like experience
- Push notification ready

## Tech Stack

- **HTML5** - Semantic markup with template elements
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript (ES6+)** - Vanilla JS with no dependencies
- **Service Worker** - Offline caching strategy

## Theme

- **Primary Color**: Red (#DC2626)
- **Background**: White (#FFFFFF)
- **Font**: Inter (Google Fonts)

## Project Structure

```
Project Salesman PWA/
|-- index.html          # Main SPA shell with page templates
|-- manifest.json       # PWA manifest configuration
|-- sw.js               # Service worker for offline support
|-- css/
|   |-- style.css       # Complete stylesheet (~1700 lines)
|-- js/
|   |-- app.js          # SPA router and page logic (~800 lines)
|   |-- data.js         # Hardcoded mock data (~400 lines)
|-- icons/
|   |-- icon-*.png      # PWA icons (various sizes)
|-- README.md           # This file
```

## Installation

### Local Development

1. Clone the repository
2. Serve the files using any static server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve

   # Using PHP
   php -S localhost:8000
   ```

3. Open `http://localhost:8000` in your browser

### Install as PWA

1. Open the app in Chrome/Edge on mobile
2. Tap "Add to Home Screen" from browser menu
3. The app will be installed as a standalone application

## Navigation

The app uses a bottom tab bar with 5 main sections:

| Tab | Modules |
|-----|---------|
| **Home** | Dashboard with quick access to all features |
| **Sales** | Invoice, D/O, Unpaid |
| **Customers** | Reseller, Schedule |
| **Inventory** | Stock, Return |
| **More** | Report, Ranking, GPS, Registration, Notification, Setting |

## Mock Data

This is a mockup version with hardcoded data for demonstration purposes. The `js/data.js` file contains sample data for:

- 1 user profile
- 6 customers/resellers
- 5 invoices with line items
- 4 delivery orders
- 5 unpaid invoices
- 6 stock items
- 3 return requests
- 4 scheduled visits
- 5 daily reports
- 10 ranking entries
- 5 notifications
- GPS history entries

## Browser Support

- Chrome (recommended)
- Edge
- Safari
- Firefox

## Mobile Viewport

Optimized for mobile devices with viewport width 375px - 428px.

## License

Proprietary - All rights reserved.

## Author

Kiyo Software TechLab
