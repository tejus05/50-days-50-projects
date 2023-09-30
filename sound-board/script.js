// const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const container = document.querySelector('.container');

const audioElements = container.querySelectorAll('audio');

const sounds = [];

audioElements.forEach((audio) => {

  sounds.push(audio.className.toString());
});

sounds.forEach(
  sound => {
    const button = document.createElement('button');
    button.classList.add('sound');

    button.append(sound);

    document.querySelector('.buttons').appendChild(button);
    button.addEventListener('click', () => {
      stopSounds();
      document.querySelector(`.${sound}`).play();
    });
  }
);
function stopSounds() {
  sounds.forEach((sound) => {
    document.querySelector(`.${sound}`).pause();
    document.querySelector(`.${sound}`).currentTime = 0;
  })
}