// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navLinks.classList.remove("active");
  });
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Project animation
const rows = document.querySelectorAll('.projects-vertical-carousel .row');
let current = 0;
let interval;

function updateRows() {
  rows.forEach((row, i) => {
    row.classList.remove('active', 'prev');
    if (i === current) row.classList.add('active'); // current row visible
    if (i === (current - 1 + rows.length) % rows.length) row.classList.add('prev'); // previous row
  });
}

function startCarousel() {
  stopCarousel(); // clear any existing interval before starting
  interval = setInterval(() => {
    current = (current + 1) % rows.length;
    updateRows();
    attachHoverHandlers(); // reattach listeners to new active row
  }, 2000);
}

function stopCarousel() {
  clearInterval(interval);
}

function attachHoverHandlers() {
  // Remove old listeners
  rows.forEach(row => {
    row.querySelectorAll('.project-card').forEach(card => {
      card.removeEventListener('mouseenter', stopCarousel);
      card.removeEventListener('mouseleave', startCarousel);
      card.removeEventListener('touchstart', stopCarousel);  // ✅ added
      card.removeEventListener('touchend', startCarousel);    // ✅ added
    });
  });

  // Add new listeners only to active row cards
  const activeRow = rows[current];
  activeRow.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', stopCarousel);
    card.addEventListener('mouseleave', startCarousel);
    card.addEventListener('touchstart', stopCarousel);  // ✅ added
    card.addEventListener('touchend', startCarousel);    // ✅ added
  });
}

// Initialize
updateRows();
attachHoverHandlers();
startCarousel();
