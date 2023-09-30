const jokeElement = document.getElementById('joke');
const jokebutton = document.getElementById('button');

jokebutton.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }
  const response = await fetch('https://icanhazdadjoke.com', config);
  const result = await response.json();
  jokeElement.innerText = result.joke;

  // const config = {
  //   headers: {
  //     'Accept': 'application/json'
  //   }
  // }
  // fetch('https://icanhazdadjoke.com', config)
  //   .then(response => response.json())
  //   .then(result => {
  //     jokeElement.innerText = result.joke;
  //   })
}