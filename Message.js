// message.js
  document.getElementById("back").onclick = function() {
    history.back();
  };
  
  // Efek ketik per kata
  const message = `heyy cessaa!!!,
<br> <br>
I just wanna say, kamu itu cantik banget not only dari foto atau IG, tapi juga dari cara kamu ngobrol dan bikin aku pengen kenal lebih jauh wkkw. even kita belum pernah ketemu langsung, aku bisa feel vibe kamu yang beda, yang bikin aku curious banget.
<br> <br>
I believe someday kita bakal ketemu, dan kamu pasti jauh lebih cantikk n kerenn daripada yang aku bayangin sekarang. for now, aku cuma pengen kamu tau kalo aku really like the way kamu jadi diri sendiri, and I’m happy bisa kenal kamu walau cuma lewat chat.
<br> <br>
stay awesome, ya. aku bakal terus nunggu waktu kita bisa ngobrol face to face <3 `;
  
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
  