function updateBackgroundHeight() {
  const target = document.getElementById('carouselExampleCaptions');
  const bg = document.getElementById('backgroundOverlay');
  if (target && bg) {
    const bottom = target.getBoundingClientRect().bottom + window.scrollY;
    bg.style.height = bottom + 'px';
  }
}

window.addEventListener('load', updateBackgroundHeight);
window.addEventListener('resize', updateBackgroundHeight);
window.addEventListener('scroll', updateBackgroundHeight);

window.addEventListener('DOMContentLoaded', () => {
  const scroller = document.querySelector('.scroll-inner');
  if (scroller) {
    const cards = Array.from(scroller.children);
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      scroller.appendChild(clone);
    });
  }
});
