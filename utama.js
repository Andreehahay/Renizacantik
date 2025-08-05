// Cek jika halaman direfresh
if (performance.navigation.type === 1) {
    // Redirect ke index.html saat refresh
    window.location.href = "index.html";
  }
  
  const music = document.getElementById('bg-music');

  function playMusicAndGoTo(page) {
    localStorage.setItem('musicPlaying', 'true');
    localStorage.setItem('musicCurrentTime', music.currentTime); // Simpan posisi terakhir
    window.location.href = page;
  }

  document.querySelector('.music').onclick = () => {
    music.play();
    playMusicAndGoTo('Music.html');
  };

  document.querySelector('.start').onclick = () => {
    music.play();
    playMusicAndGoTo('Message.html');
  };