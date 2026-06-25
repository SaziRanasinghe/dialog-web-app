# Dialog Sri Lanka - Self-Service Telecom Web Application

A complete, responsive telecom self-service web application for Dialog Sri Lanka, built with **pure HTML5, CSS3, and Vanilla JavaScript (ES6)** - no frameworks or external libraries.

## 📁 Project Structure

```
my dialog new/
├── index.html          # Login/Welcome page
├── home.html           # Dashboard page
├── packages.html       # Packages browsing page
├── style.css           # Shared stylesheet (responsive design)
├── app.js              # Vanilla JavaScript (ES6)
└── README.md           # This file
```

## 🎨 Design System

### Brand Colors
- **Primary**: `#E8003D` (Dialog Red)
- **Primary Light**: `#FF6B8A` (Soft Pink)
- **Background**: `#FFF5F7` (Soft Pink Background)
- **Surface**: `#FFFFFF` (White)
- **Text Dark**: `#2D2D2D` (Dark Gray)
- **Text Light**: `#777777` (Medium Gray)
- **Border**: `#F1D9DF` (Light Border)

### Typography
- **Font**: Inter (with system fallbacks)
- **Font Sizes**: Responsive scaling based on breakpoints
- **Font Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)

### Spacing & Radius
- **Border Radius**: 8px (small), 16px (medium), 20px (large)
- **Shadows**: Subtle shadows for depth and hierarchy
- **Gap/Padding**: Consistent spacing using CSS Grid and Flexbox

## 📱 Responsive Breakpoints

- **Mobile**: `<768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `>1024px`

### Layout Changes

| Device | Sidebar | Navigation | Grid | Content |
|--------|---------|-----------|------|---------|
| Desktop | Visible (250px) | Top Header | 3-column | Margin Left |
| Tablet | Hidden | Top Header | 2-column | Full Width |
| Mobile | Hidden | Bottom Nav | 1-column | Full Width + Padding |

## 🔐 Pages Overview

### 1. **Login Page** (`index.html`)

Two-column layout (responsive to single column on mobile):

**Left Section:**
- Dialog logo
- Welcome heading
- Feature list with checkmarks
- Decorative gradient background

**Right Section:**
- Login card with form
- Mobile number input (10 digits)
- OTP input (4-6 digits)
- Form validation with inline error messages
- Register and Forgot Password links

**Features:**
- Client-side validation
- Error handling and display
- Redirect to dashboard on success
- Session stored in localStorage

### 2. **Dashboard** (`home.html`)

**Header:**
- Dialog logo
- Notification icon
- User avatar

**Sidebar (Desktop) / Bottom Nav (Mobile):**
- Dashboard (active)
- Packages
- Settings
- Logout

**Main Content:**

1. **Balance Card**
   - Large red gradient background
   - Current balance display: Rs. 12.70
   - Postpaid badge
   - Recharge button
   - Share button (web share API or clipboard fallback)

2. **Notification Banner**
   - Dismissible alert about expiring data pack
   - Auto-animate out when dismissed

3. **Recent Activity Grid**
   - 4 activity cards with left accent border
   - Data Used (Blue)
   - Voice Calls (Green)
   - SMS Sent (Orange)
   - Recent Recharge (Red)
   - Each with icon, label, value, and date

4. **Usage Summary**
   - 3 animated progress bars (Data, Voice, SMS)
   - Percentage and consumed/total display
   - Smooth animation on page load

5. **Promo Banner**
   - Unlimited Data Pack offer
   - Price: Rs. 999
   - Phone emoji illustration
   - Subscribe button

### 3. **Packages** (`packages.html`)

**Filter Tabs:**
- All (default active)
- Data
- Voice
- SMS

**Package Cards** (responsive grid):
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

**Card Contents:**
- Package name and type badge (color-coded)
- Size/duration info
- Price in large text
- Validity period
- Subscribe button

**Packages Included:**

*Data Packages:*
- 100MB (Rs. 19)
- 500MB (Rs. 49)
- 1GB (Rs. 79)
- 2GB (Rs. 99)
- 5GB (Rs. 199)
- 10GB (Rs. 299)

*Voice Packages:*
- 100 Minutes (Rs. 49)
- 250 Minutes (Rs. 99)
- Unlimited Nights (Rs. 29)
- 500 Minutes Monthly (Rs. 149)
- Unlimited Local (Rs. 399)
- International Calls (Rs. 199)

*SMS Packages:*
- 50 SMS (Rs. 5)
- 100 SMS (Rs. 9)
- 250 SMS (Rs. 19)
- 500 SMS (Rs. 29)
- Unlimited SMS (Rs. 49)
- Premium SMS (Rs. 79)

## 🚀 JavaScript Features

### Core Functionality (app.js)

1. **Class-Based Architecture**
   - `DialogApp` class manages all application state
   - Singleton pattern for global app instance

2. **Authentication**
   - Login form validation
   - Mobile number format check
   - OTP validation
   - Session storage in localStorage
   - Protected page redirects

3. **Navigation**
   - Active page tracking
   - Sidebar/bottom nav synchronization
   - Smooth page transitions
   - Logout functionality

4. **Package Filtering**
   - JavaScript-based filter (no page reload)
   - Data attributes for categorization
   - Show/hide animations
   - Tab state management

5. **Toast Notifications**
   - Animated toast messages
   - Success, error, and info variants
   - Auto-dismiss after 3 seconds
   - Responsive positioning (bottom-right desktop, bottom-center mobile)

6. **UI Interactions**
   - Notification banner dismissal
   - Share functionality (Web Share API with clipboard fallback)
   - Subscribe button feedback
   - Form error handling

7. **Accessibility**
   - Semantic HTML5
   - ARIA labels and roles
   - Keyboard navigation support
   - Focus management
   - Visible focus states

## 💾 Local Storage

**Key:** `dialogUser`

**Format:**
```json
{
  "mobile": "0701234567",
  "loginTime": "2024-01-15T10:30:00.000Z"
}
```

## 🎯 CSS Features

### Layout Systems
- **Flexbox** for flexible, responsive layouts
- **CSS Grid** for card grids with auto-fit
- **CSS Custom Properties** (Variables) for theming

### Responsive Design
- Mobile-first approach
- Media queries for breakpoints
- Fluid typography
- Adaptive spacing

### Animations
- Smooth transitions on all interactive elements
- Progress bar animations on page load
- Toast slide-in/out animations
- Banner dismiss animation
- Hover effects with subtle transforms

### No External Dependencies
- ✅ Pure HTML5 semantic markup
- ✅ CSS3 with custom properties
- ✅ Vanilla JavaScript ES6+
- ✅ No Bootstrap, Tailwind, or UI frameworks
- ✅ No jQuery or other libraries
- ✅ No image assets (emoji used instead)

## 🔧 How to Use

### 1. Open in Browser
Simply open `index.html` in any modern web browser:
```bash
# Option 1: Direct file open
open index.html

# Option 2: Local server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000
```

### 2. Login Credentials (for testing)
- **Mobile**: Any 10-digit number (e.g., 0701234567)
- **OTP**: Any 4-6 digit code (e.g., 1234)

### 3. Navigation
- Click sidebar items on desktop
- Click bottom navigation on mobile
- Use logout to return to login page

### 4. Test Features
- Dismiss notification banner
- Click Recharge or Share buttons
- Try package filtering on the Packages page
- Subscribe to packages (shows toast notification)

## 📋 Accessibility Features

- Semantic HTML5 elements: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<aside>`
- ARIA labels for icon buttons and interactive elements
- ARIA roles for complex components (tabs, alerts)
- Keyboard navigation support
- Visible focus states on all interactive elements
- Color contrast ratios meet WCAG AA standards
- Form validation with error messages

## 🎨 CSS Organization

```css
:root { /* Design tokens */ }
* { /* Global reset */ }
html, body { /* Document defaults */ }
h1-h4, p, a { /* Typography */ }
.btn { /* Button styles */ }
.form-group { /* Form controls */ }
.card { /* Card components */ }
.container { /* Layout */ }
.flex, .grid { /* Layout helpers */ }
header, nav { /* Navigation */ }
.sidebar { /* Desktop navigation */ }
.balance-card { /* Home specific */ }
/* ... page-specific styles ... */
.bottom-nav { /* Mobile navigation */ }
@media { /* Responsive breakpoints */ }
```

## 🔒 Security Considerations

- Form validation on client-side (server-side validation recommended in production)
- No sensitive data stored beyond localStorage
- Input sanitization ready (extend as needed)
- HTTPS recommended for production

## 🌐 Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## ✨ Features Implemented

- ✅ Responsive design (mobile-first)
- ✅ Login with validation
- ✅ Dashboard with activity cards
- ✅ Usage progress bars
- ✅ Promo banner
- ✅ Package catalog with filtering
- ✅ Toast notifications
- ✅ Dismissible alerts
- ✅ Share functionality
- ✅ Session management
- ✅ Accessibility (WCAG AA)
- ✅ Smooth animations
- ✅ Pure vanilla code (no dependencies)

## 📝 Code Quality

- **No Frameworks**: Pure HTML5, CSS3, Vanilla JavaScript
- **No Build Tools**: Works directly in browser
- **Clean Code**: Well-organized, commented sections
- **Semantic HTML**: Proper element usage
- **CSS Architecture**: Custom properties, organized sections
- **ES6+ JavaScript**: Classes, arrow functions, template literals
- **Responsive**: Mobile-first, three breakpoints
- **Accessible**: WCAG AA compliant

## 🚀 Future Enhancements

- Backend API integration
- User authentication with backend
- Real data from database
- More detailed account information
- Payment integration
- Customer support chat
- Bill history and invoices
- Data analytics and usage graphs

## 📞 Support

For issues or enhancements, refer to the inline comments in:
- `style.css` - CSS organization
- `app.js` - JavaScript methods
- `index.html`, `home.html`, `packages.html` - HTML structure

---

**Built with ❤️ using pure web technologies for Dialog Sri Lanka**

Version 1.0.0 | 2024
