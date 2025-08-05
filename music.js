const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');
const volumeBtn = document.getElementById('volume-btn');
const volumeSlider = document.getElementById('volume-slider');
const songTitle = document.getElementById('song-title');
const songImage = document.getElementById('song-image');
const playlistItems = document.querySelectorAll('.playlist-item');

// Play or Pause Music
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  }
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress || 0;

  let minutes = Math.floor(audio.currentTime / 60);
  let seconds = Math.floor(audio.currentTime % 60);
  if (seconds < 10) seconds = '0' + seconds;
  currentTimeEl.textContent = `${minutes}:${seconds}`;
});

// Move music with progress bar
progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// Volume control
volumeBtn.addEventListener('click', () => {
  if (volumeSlider.style.display === "none") {
    volumeSlider.style.display = "block";
  } else {
    volumeSlider.style.display = "none";
  }
});

volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});

// Change song from playlist
playlistItems.forEach(item => {
  item.addEventListener('click', () => {
    const title = item.getAttribute('data-title');
    const image = item.getAttribute('data-image');
    const duration = item.getAttribute('data-duration');
    const song = item.getAttribute('data-song');

    songTitle.textContent = title;
    songImage.src = image;
    totalDurationEl.textContent = duration;
    audio.src = song;
    audio.play();
    playPauseBtn.textContent = '⏸️';
  });
});
