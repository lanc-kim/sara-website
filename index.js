const bgVideo = document.getElementById('bg-video');
const bgImage = document.getElementById('bg-image');
const worksItems = document.querySelectorAll('.works-list li');

// store current sources
let currentVideoSrc = '';
let currentImageSrc = '';

worksItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const videoSrc = item.getAttribute('data-video');
    const imageSrc = item.getAttribute('data-image');

    // 🔹 If it's a video item
    if (videoSrc) {
      if (currentVideoSrc !== videoSrc) {
        currentVideoSrc = videoSrc;
        bgVideo.src = videoSrc;
        bgVideo.play();
      }

      // show video, hide image
      bgImage.style.opacity = 0;
      bgVideo.style.opacity = 1;
    }

    // 🔹 If it's an image item
    if (imageSrc) {
      if (currentImageSrc !== imageSrc) {
        currentImageSrc = imageSrc;
        bgImage.src = imageSrc;
      }

      // show image, hide video
      bgVideo.style.opacity = 0;
      bgImage.style.opacity = 1;
    }
  });

  item.addEventListener('mouseleave', () => {
    // fade both out smoothly
    bgVideo.style.opacity = 0;
    bgImage.style.opacity = 0;
  });
});
