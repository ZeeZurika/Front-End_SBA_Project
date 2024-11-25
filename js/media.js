document.addEventListener('DOMContentLoaded', () => {
  const videoData = [
    { src: 'videos/citytraffic.mp4', thumbId: 'city-drive' },
    { src: 'videos/desertdrive.mp4', thumbId: 'desert-drive' },
    { src: 'videos/javaclass.mp4', thumbId: 'java-class' },
    { src: 'videos/ontheroad.mp4', thumbId: 'the-road' },
    { src: 'videos/tunnel.mp4', thumbId: 'tunnel-drive' }
  ];

  const mainVideo = document.getElementById('main-video');

  videoData.forEach(({ src, thumbId }) => {
    // Create a hidden video element for thumbnail generation
    const videoElement = document.createElement('video');
    videoElement.src = src;
    videoElement.muted = true;
    videoElement.currentTime = 5; // Capture a frame at 5 seconds

    // Create a canvas to capture the video frame
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 150;
    canvas.height = 100;

    // Wait for the video to load
    videoElement.addEventListener('loadeddata', () => {
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      // Find the corresponding thumbnail image
      const thumbnailImg = document.getElementById(thumbId);
      thumbnailImg.src = canvas.toDataURL('image/jpeg'); // Generate thumbnail
      thumbnailImg.dataset.videoSrc = src; // Store video path for playback
    });

    // Add a click event listener to play the video
    document.getElementById(thumbId).addEventListener('click', (event) => {
      mainVideo.src = event.target.dataset.videoSrc; // Set the main video source
      mainVideo.play(); // Auto-play the selected video
    });
  });
});

/*
videoElement.addEventListener('loadeddata', () => {
  console.log(`Loaded video: ${src}`);
  ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
});

 */
