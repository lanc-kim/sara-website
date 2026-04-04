const bgVideo = document.getElementById('bg-video');
const worksItems = document.querySelectorAll('.works-list li');

// store current video source
let currentVideoSrc = '';

worksItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const videoSrc = item.getAttribute('data-video');

    // only change src if it's a new video
    if (currentVideoSrc !== videoSrc) {
      currentVideoSrc = videoSrc;
      bgVideo.src = videoSrc;
      bgVideo.play();
    }

    bgVideo.style.opacity = 1; // fade in
  });

  item.addEventListener('mouseleave', () => {
    bgVideo.style.opacity = 0; // fade out smoothly
    // do NOT reset src or stop video
    // the video keeps playing and stays at its current timestamp
  });
});
