const videos = [...document.querySelectorAll('.montage video')];
for (const video of videos) {
  video.addEventListener('play', () => {
    videos.forEach(other => { if (other !== video) other.pause(); });
  });
  video.addEventListener('error', () => {
    if (video.parentElement.querySelector('.media-error')) return;
    const link = document.createElement('a');
    link.className = 'media-error';
    link.href = video.getAttribute('src');
    link.textContent = 'Open MP4';
    video.after(link);
  });
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) videos.forEach(video => video.pause());
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (!entry.isIntersecting) entry.target.pause(); });
  }, { threshold: 0.05 });
  videos.forEach(video => observer.observe(video));
}

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  const updateBackToTop = () => backToTop.classList.toggle('is-visible', window.scrollY > 600);
  updateBackToTop();
  window.addEventListener('scroll', updateBackToTop, { passive: true });
}
