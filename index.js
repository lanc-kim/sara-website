// ===== Works Page Hover Video/Image Logic =====
const bgVideo = document.getElementById('bg-video');
const bgImage = document.getElementById('bg-image');
const worksItems = document.querySelectorAll('.works-list li');

// Track currently displayed media
let currentVideoSrc = '';
let currentImageSrc = '';

// Preload all videos
const preloadedVideos = {};
worksItems.forEach(item => {
  const videoSrc = item.getAttribute('data-video');
  if (videoSrc && !preloadedVideos[videoSrc]) {
    const vid = document.createElement('video');
    vid.src = videoSrc;
    vid.preload = 'auto';
    preloadedVideos[videoSrc] = vid;
  }
});

// Hover logic
worksItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const videoSrc = item.getAttribute('data-video');
    const imageSrc = item.getAttribute('data-image');

    if (videoSrc) {
      if (currentVideoSrc !== videoSrc) {
        currentVideoSrc = videoSrc;
        bgVideo.src = videoSrc;
        bgVideo.play();
      }
      bgVideo.style.opacity = 1;
      bgImage.style.opacity = 0;
    }

    if (imageSrc) {
      if (currentImageSrc !== imageSrc) {
        currentImageSrc = imageSrc;
        bgImage.src = imageSrc;
      }
      bgImage.style.opacity = 1;
      bgVideo.style.opacity = 0;
    }
  });

  item.addEventListener('mouseleave', () => {
    // Smooth fade out
    bgVideo.style.opacity = 0;
    bgImage.style.opacity = 0;
  });
});
