const pics = document.getElementById('pics');
const prevButton = document.getElementById('btn-1');
const nextButton = document.getElementById('btn-2');
const images = document.querySelectorAll('.container img');

let currentIndex = 0;

function changeImage() {
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
   pics.style.transform = `translateX(${-currentIndex * 500}px)`
}

nextButton.addEventListener('click', () => {
  currentIndex++;
  changeImage();
});

prevButton.addEventListener('click', () => {
  currentIndex--;
  changeImage();
});


let interval = setInterval(() => {
  currentIndex++;
  changeImage();
}, 2000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    currentIndex++;
    changeImage();
  }, 2000);
}

nextButton.addEventListener('click', resetInterval);
prevButton.addEventListener('click', resetInterval);