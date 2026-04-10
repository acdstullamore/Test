const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  rootMargin: '0px 0px -120px 0px',
  threshold: 0.15,
});

revealElements.forEach((el) => revealObserver.observe(el));

const carousel = document.getElementById('serviceCarousel');

function setupInfiniteCarousel() {
  if (!carousel) return;
  const cards = Array.from(carousel.children);
  cards.forEach((card) => carousel.appendChild(card.cloneNode(true)));
}

window.addEventListener('load', () => {
  document.querySelector('.hero-content')?.classList.add('visible');
  setupInfiniteCarousel();
});
