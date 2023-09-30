const insert = document.querySelector('.insert');

window.addEventListener('keydown', (key) => {
  insert.innerHTML = `
  <div class="key">
      ${key.key === ' ' ? 'Space' : key.key}
      <small>event.key</small>
    </div>
    <div class="key">
      ${key.keyCode}
      <small>event.keycode</small>
    </div>
    <div class="key">
      ${key.code}
      <small>event.code</small>
    </div>
  `;
});