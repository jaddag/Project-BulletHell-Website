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
