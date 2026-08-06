// ============ MOBILE MENU ============
const navToggle = document.getElementById('navToggle');
const navLinksSource = document.getElementById('navLinks');
const navbarInner = document.querySelector('.navbar__inner');

if (navToggle && navLinksSource) {
  // Build a mobile dropdown menu cloned from the desktop links
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'navbar__mobile-menu';
  mobileMenu.id = 'mobileMenu';
  mobileMenu.innerHTML = navLinksSource.innerHTML;
  document.querySelector('.navbar').appendChild(mobileMenu);

  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============ NAVBAR SCROLL STATE ============
const navbar = document.getElementById('navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 40) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  lastScroll = current;
}, { passive: true });

// ============ FOOTER YEAR ============
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
