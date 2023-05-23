document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    console.log(video)
    video.addEventListener('loadedmetadata', function() {
      video.play();
    });
});