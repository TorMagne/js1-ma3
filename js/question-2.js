const url = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';

const gameInfo = document.querySelector('.api-call');

const loader = document.querySelector('.loader');

loader.innerHTML += `<p class="loader-text"> Rating list is loading </p>`;

// forandre til gameName?
async function getGames() {
  try {
    //fetch
    const resp = await fetch(url);

    const result = await resp.json();

    const gameFacts = result.results;

    gameInfo.innerHTML = '';

    for (let i = 0; i < gameFacts.length; i++) {
      if (i === 8) {
        break;
      }
      gameInfo.innerHTML += `<h2 class="game-title">${gameFacts[i].name}</h2>`;
      gameInfo.innerHTML += `<p>Rating: ${gameFacts[i].rating}</p>`;
      gameInfo.innerHTML += `<p>Tags: ${gameFacts[i].tags.length}</p>`;
    }
  } catch (error) {
    gameInfo.innerHTML = displayError('An error occurred when trying to call the API');
  }
}

getGames();
