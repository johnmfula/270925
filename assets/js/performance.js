// Performance optimization script
(function(){
  // Lazy load images
  if('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // Defer video loading
  const videos = document.querySelectorAll('video[preload="metadata"]');
  videos.forEach(video => {
    video.addEventListener('canplay', () => {
      video.play();
    });
  });
})();
