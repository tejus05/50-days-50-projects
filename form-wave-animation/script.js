const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => {
      return `<span style="transition-delay: ${index * 50}ms;">${letter}</span>`
    }).join('')
});