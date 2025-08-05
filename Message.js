// message.js
  document.getElementById("back").onclick = function() {
    history.back();
  };
  
  // Efek ketik per kata
  const message = `Hi Reniza Zulkarnaen! Congrats on becomin’ a year older! <br> <br>
06 august’s not just your birthday it’s a reminder of how lucky the world is to have you, and how lucky I am to have met you.
Terima kasih sudah hadir di hidupku dengan semua versi diri Ica yang hangat, yang gemas, bahkan yang ngambek pun tetap aku suka. Setiap detik bersamamu terasa lebih hidup, dan setiap senyummu adalah hadiah paling tenang buat pikiranku. May your days be as soft as your laugh, as warm as your hug, and as beautiful as your soul.
And may I get to be a part of those days for as long as I’m allowed to. <br> <br>
Selamat ulang tahun, perempuan yang selalu bisa buat hatiku tenang cuma dengan bilang “iya, aku ngerti.”
You deserve the kind of love that feels like coming home and I hope I can be that home.

Love you more, always in all ways.🤍 `;
  
  const messageContent = document.getElementById("message-content");
  const words = message.split(" ");
  let index = 0;
  
  function typeMessage() {
    if (index < words.length) {
      messageContent.innerHTML += words[index] + " ";
      index++;
      setTimeout(typeMessage, 150); // 150ms antar kata, bisa diatur kecepatannya
    }
  }
  
  window.onload = typeMessage;
  
  document.getElementById("next").onclick = function () {
    // Hentikan lagu sebelumnya jika masih bermain
    const currentMusic = document.getElementById("bg-music");
    currentMusic.pause();
    currentMusic.currentTime = 0;
  
    // Putar lagu baru
    const nextMusic = document.getElementById("next-music");
    nextMusic.play();
  
    // Setelah beberapa detik (misal 3 detik), lanjut redirect
    setTimeout(() => {
      window.location.href = "gallery.html";
    }, 3000); // 3000ms = 3 detik
  };
  
