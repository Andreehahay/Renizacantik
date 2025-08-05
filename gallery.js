document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.querySelector('.start-button');
  const startSection = document.querySelector('.start-section');

  const photoSources = ['1.jpg', '2.jpg', '5.PNG', '4.jpg'];
  const randomDates = [
    'MY LOVE',
    'MY LOVE',
    'MY LOVE',
    'MY LOVE'
  ];

  startButton.addEventListener('click', function () {
    // Bersihkan start-content
    const startContent = document.querySelector('.start-content');
    startContent.style.display = 'none';

    // Tambahkan foto satu per satu dengan jeda
    photoSources.forEach((src, index) => {
      setTimeout(() => {
        const frame = document.createElement('div');
        frame.className = 'photo-frame';
        frame.style.animationDelay = '0s';

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Photo ${index + 1}`;

        const date = document.createElement('div');
        date.className = 'photo-date';
        date.textContent = randomDates[index];

        frame.appendChild(img);
        frame.appendChild(date);

        startSection.appendChild(frame);
      }, index * 800); // jeda 800ms antar foto
    });
  });
});
