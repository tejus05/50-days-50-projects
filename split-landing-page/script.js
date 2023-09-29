const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', addBoxes);

addBoxes();

function addBoxes() {
  let windowHeight = (window.innerHeight) * (4 / 5);
  boxes.forEach(
    box => {
      let topDistanceOfBox = box.getBoundingClientRect().top;
      if (topDistanceOfBox < windowHeight) {
        box.classList.add('active');
      }
      else {
        box.classList.remove('active');
      }
    }
  );
}