/* =========================================
   APP.JS - Vanilla JavaScript ES6
   ========================================= */

class DialogApp {
  constructor() {
    this.currentUser = null;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateActivePage();
  }

  setupEventListeners() {
    // Login page events
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    }

    // Dismiss notification
    const dismissBtn = document.querySelector('.dismiss-btn');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => this.dismissNotification());
    }

    // Recharge button
    const rechargeBtn = document.querySelector('[data-action="recharge"]');
    if (rechargeBtn) {
      rechargeBtn.addEventListener('click', () => this.showToast('Redirecting to recharge page...'));
    }

    // Share button
    const shareBtn = document.querySelector('[data-action="share"]');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => this.handleShare());
    }

    // Package filter tabs
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => this.handlePackageFilter(e));
    });

    // Subscribe buttons
    const subscribeBtns = document.querySelectorAll('.btn-subscribe');
    subscribeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => this.handleSubscribe(e));
    });

    // Navigation links
    const navLinks = document.querySelectorAll('nav a, .bottom-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavigation(e));
    });

    // Logout
    const logoutLink = document.querySelector('[data-action="logout"]');
    if (logoutLink) {
      logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleLogout();
      });
    }
  }

  // =========================================
  // LOGIN FUNCTIONALITY
  // =========================================

  handleLogin(e) {
    e.preventDefault();

    const mobileNumber = document.getElementById('mobile-number').value.trim();
    const otp = document.getElementById('otp').value.trim();

    // Reset error messages
    this.clearErrors();

    let isValid = true;

    // Validate mobile number
    if (!mobileNumber) {
      this.showFieldError('mobile-number', 'Mobile number is required');
      isValid = false;
    } else if (!/^\d{10}$/.test(mobileNumber.replace(/\D/g, ''))) {
      this.showFieldError('mobile-number', 'Please enter a valid 10-digit mobile number');
      isValid = false;
    }

    // Validate OTP
    if (!otp) {
      this.showFieldError('otp', 'OTP is required');
      isValid = false;
    } else if (!/^\d{4,6}$/.test(otp)) {
      this.showFieldError('otp', 'Please enter a valid OTP');
      isValid = false;
    }

    if (isValid) {
      // Store user session
      this.currentUser = {
        mobile: mobileNumber,
        loginTime: new Date()
      };

      localStorage.setItem('dialogUser', JSON.stringify(this.currentUser));

      // Redirect to home
      this.showToast('Login successful! Redirecting...', 'success');
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 500);
    }
  }

  showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field) {
      const formGroup = field.closest('.form-group');
      formGroup.classList.add('error');

      const errorMsg = formGroup.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.textContent = message;
        errorMsg.classList.add('show');
      }

      field.focus();
    }
  }

  clearErrors() {
    document.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('error');
      const errorMsg = group.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.classList.remove('show');
      }
    });
  }

  // =========================================
  // NOTIFICATION BANNER
  // =========================================

  dismissNotification() {
    const banner = document.querySelector('.notification-banner');
    if (banner) {
      banner.classList.add('dismiss');
      setTimeout(() => {
        banner.style.display = 'none';
      }, 300);
    }
  }

  // =========================================
  // SHARE FUNCTIONALITY
  // =========================================

  handleShare() {
    const text = 'Check out Dialog Sri Lanka self-service portal! Manage your account easily.';

    if (navigator.share) {
      navigator.share({
        title: 'Dialog Sri Lanka',
        text: text,
        url: window.location.href
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(text);
      this.showToast('Copied to clipboard!', 'info');
    }
  }

  // =========================================
  // PACKAGE FILTERING
  // =========================================

  handlePackageFilter(e) {
    const category = e.target.getAttribute('data-filter');

    // Update active tab
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');

    // Filter packages
    const packageCards = document.querySelectorAll('.package-card');

    packageCards.forEach(card => {
      if (category === 'all') {
        card.classList.remove('hidden');
      } else {
        const cardCategory = card.getAttribute('data-category');
        if (cardCategory === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      }
    });
  }

  // =========================================
  // SUBSCRIBE TO PACKAGE
  // =========================================

  handleSubscribe(e) {
    const packageCard = e.target.closest('.package-card');
    const packageName = packageCard.querySelector('.package-name').textContent;

    this.showToast(`Subscribed to ${packageName}!`, 'success');

    // Visual feedback
    e.target.disabled = true;
    e.target.textContent = '✓ Subscribed';

    setTimeout(() => {
      e.target.disabled = false;
      e.target.textContent = 'Subscribe';
    }, 2000);
  }

  // =========================================
  // NAVIGATION
  // =========================================

  handleNavigation(e) {
    const href = e.target.getAttribute('href');

    if (href && href.startsWith('http')) {
      return; // Allow external links
    }

    if (href === '#' || !href) {
      e.preventDefault();
      return;
    }

    // Update active nav item
    document.querySelectorAll('nav a, .bottom-nav a').forEach(link => {
      link.classList.remove('active');
    });
    e.target.classList.add('active');
  }

  handleLogout() {
    localStorage.removeItem('dialogUser');
    this.showToast('Logged out successfully!', 'info');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 500);
  }

  // =========================================
  // TOAST NOTIFICATIONS
  // =========================================

  showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('remove');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }

  // =========================================
  // PAGE UPDATES
  // =========================================

  updateActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('nav a, .bottom-nav a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // =========================================
  // UTILITY FUNCTIONS
  // =========================================

  checkAuthentication() {
    const user = localStorage.getItem('dialogUser');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (!user && currentPage !== 'index.html' && currentPage !== '') {
      window.location.href = 'index.html';
    }
  }
}

// =========================================
// INITIALIZE APP
// =========================================

document.addEventListener('DOMContentLoaded', () => {
  // Create global app instance
  window.dialogApp = new DialogApp();

  // Check authentication on protected pages
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if ((currentPage === 'home.html' || currentPage === 'packages.html')) {
    window.dialogApp.checkAuthentication();
  }

  // Initialize animations for progress bars
  initProgressBars();

  // Set first filter as active if on packages page
  const firstFilter = document.querySelector('.filter-btn');
  if (firstFilter && !firstFilter.classList.contains('active')) {
    firstFilter.classList.add('active');
  }
});

// =========================================
// PROGRESS BAR ANIMATIONS
// =========================================

function initProgressBars() {
  const bars = document.querySelectorAll('.progress-fill');
  bars.forEach(bar => {
    const percentage = bar.getAttribute('style').match(/width:\s*(\d+)%/);
    if (percentage) {
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = percentage[1] + '%';
      }, 100);
    }
  });
}

// =========================================
// KEYBOARD ACCESSIBILITY
// =========================================

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close any open modals or banners (future feature)
  }

  // Tab navigation
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});
