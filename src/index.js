fetch('http://localhost:3000/games')
    .then(res=>res.json())
    .then(data => {
        data.forEach((games) =>{
            listGames(games)
        })
        gameDeets(data[0])
        addNewHighScore()
    })

let currentGame;

const listGames = (games) => {
    const gameList = document.querySelector('.game-list')
    const gameName = document.createElement('h5')
    const gameManufacturer = document.createElement('h6')
    gameName.textContent = games.name
    gameManufacturer.textContent = `(${games.manufacturer_name})`

    gameName.addEventListener('click', ()=>{
        gameDeets(games)
        console.log(currentGame)
    })

    gameList.append(gameName, gameManufacturer)
}

const gameDeets = (games) => {
    currentGame = games
    const allDeets = document.querySelector('.game-details')
    const image = document.querySelector('#detail-image')
    const title = document.querySelector('#detail-title')
    const highScore = document.querySelector('#detail-high-score')
    image.src = games.image
    title.textContent = games.name
    highScore.textContent = games['high_score']
}

const addNewHighScore = ()=>{
    const newHighScore = document.querySelector('#high-score-form')
    newHighScore.addEventListener('submit', (e)=>{
        e.preventDefault()
        currentGame.high_score = e.target['score-input'].value
        gameDeets(currentGame)
        e.target.reset()
    })
}


