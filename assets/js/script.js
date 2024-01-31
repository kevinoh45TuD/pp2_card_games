//Variable for div that will hold either home/game screen content
const homeContainer = document.getElementById("home");
//Reference for all of modal divs 
const infoModal = document.getElementById("info-modal");
const restartModal = document.getElementById("restart-modal");
const quitModal = document.getElementById("quit-modal");
const nameModal = document.getElementById("name-modal");
const highscoreModal = document.getElementById("highscore-modal");
const endgameModal = document.getElementById("endgame-modal");
const noHighscoreModal = document.getElementById("no-highscore-modal");
//Reference to buttons
let playButton = document.getElementById("button-play");
let infoButton = document.getElementById("button-info");
const closeInfoButton = document.getElementById("close-modal");
const ingameQuitButton = document.getElementById("ingame-quit-button");
const denyQuitButton = document.getElementById("deny-quit-button");
const ingameRestartButton = document.getElementById("ingame-restart-button");
const denyRestartButton = document.getElementById("deny-restart-button");
const endgameQuitButton = document.getElementById("endgame-quit-button");
const endgameRestartButton = document.getElementById("endgame-restart-button");
//Variable for player name form
const nameForm = document.getElementById("name-form");
//Variables to keep record for each match attempt 
let flipOne = null;
let flipTwo = null;
let canFlip = 0;
//Variables to keep record of game information
let playerName1;
let playerAttempts = 0;
let matchesMade = 0;
//Arrays relating to the cards
let fullDeck = [];
let activeCards = [];
//An array that will hold objects containing previous successful matches information, name/score
let previousArray = [];
//Change content on screen to HTML for home screen
function setHome() {
    homeContainer.innerHTML =
        `
            <div class="home-text">
                <p class="dark-text">
                    Welcome to Card Games!
                    <br /><br />
                    Here you will be able to play match, the main objective is to flip
                    cards till you find a pair.
                    <br />
                    You can either start playing or get more information about the game
                    below.
                    <br />
                </p>
            </div>
            <div class="home-buttons">
                <button id="button-play" class="hbutton">
                    <i class="fa-solid fa-play"></i>
                </button>
                <div id="play-text" class="dark-text">
                    <h3>Play</h3>
                </div>
                <button id="button-info" class="hbutton">
                    <i class="fa-solid fa-info"></i>
                </button>
                <div id="info-text" class="dark-text">
                    <h3>Info</h3>
                </div>
            </div>
        `;
    let playButton = document.getElementById("button-play");
    let infoButton = document.getElementById("button-info");
    playButton.addEventListener('click', clickPlay);
    infoButton.addEventListener('click', clickInfo);
}
//Create a new object with player's score and name. Save the object to previousArray
function saveScore() {
    let previousObject = {
        previousName: playerName1,
        previousScore: playerAttempts
    };

    previousArray.push(previousObject);
}
//Called when 8 matches made. Call to save player's score/name. Open and change end screen.
function endGame() {
    saveScore();
    console.log(previousArray);
    console.log(previousArray[0].previousName);

    endgameModal.style.display = "block";
    document.getElementById("endg-name").innerHTML = playerName1;
    document.getElementById("endg-score").innerHTML = playerAttempts;
}
//Will save value of cards based on how many have been flipped. Will check if its a match based on if two have been flipped
function compareCards(comparisonCard) {
    if (flipOne === null) {
        flipOne = document.getElementById(comparisonCard);
        console.log(flipOne, flipTwo);
    }
    else {
        flipTwo = document.getElementById(comparisonCard);
        console.log(flipOne, flipTwo);
        if (flipOne.id[0] === flipTwo.id[0] && flipOne.id[1] === flipTwo.id[1]) {
            console.log("Match!");

            flipOne.style.zIndex = "-1";
            flipTwo.style.zIndex = "-1";

            flipOne = null;
            flipTwo = null;

            playerAttempts++;
            let whatScore = document.getElementById("what-score");
            whatScore.innerHTML = "Score: " + playerAttempts;
            matchesMade++;

            if (matchesMade >= 8) {
                endGame();
            }
        }
        else {

            console.log("No Match!");

            flipOne.src = "assets/images/card-art/card-back.png";
            flipTwo.src = "assets/images/card-art/card-back.png";

            flipOne.addEventListener("click", clickCard);
            flipTwo.addEventListener("click", clickCard);

            flipOne = null;
            flipTwo = null;

            playerAttempts++;
            let whatScore = document.getElementById("what-score");
            whatScore.innerHTML = "Score: " + playerAttempts;
        }

        canFlip = 0;
    }
}
//Switch case to set cards new image based on which card it is (what the card's id is)
function flipCard(cardValue, whichCard) {
    switch (cardValue) {
        case "2r-heart":
            whichCard.src = "assets/images/card-art/heart2.png";
            break;
        case "3r-heart":
            whichCard.src = "assets/images/card-art/heart3.png";
            break;
        case "4r-heart":
            whichCard.src = "assets/images/card-art/heart4.png";
            break;
        case "5r-heart":
            whichCard.src = "assets/images/card-art/heart5.png";
            break;
        case "2r-diamond":
            whichCard.src = "assets/images/card-art/diamond2.png";
            break;
        case "3r-diamond":
            whichCard.src = "assets/images/card-art/diamond3.png";
            break;
        case "4r-diamond":
            whichCard.src = "assets/images/card-art/diamond4.png";
            break;
        case "5r-diamond":
            whichCard.src = "assets/images/card-art/diamond5.png";
            break;
        case "2b-spade":
            whichCard.src = "assets/images/card-art/spade2.png";
            break;
        case "3b-spade":
            whichCard.src = "assets/images/card-art/spade3.png";
            break;
        case "4b-spade":
            whichCard.src = "assets/images/card-art/spade4.png";
            break;
        case "5b-spade":
            whichCard.src = "assets/images/card-art/spade5.png";
            break;
        case "2b-club":
            whichCard.src = "assets/images/card-art/club2.png";
            break;
        case "3b-club":
            whichCard.src = "assets/images/card-art/club3.png";
            break;
        case "4b-club":
            whichCard.src = "assets/images/card-art/club4.png";
            break;
        case "5b-club":
            whichCard.src = "assets/images/card-art/club5.png";
            break;
        default:
            whichCard.src = "assets/images/card-art/heart2.png";
            break;
    }
}
//Once any card is clicked it will call this function, which will flip the card then compare them.
function clickCard() {

    let cardId = this.id;

    if (canFlip <= 1) {


        if (flipOne !== null) {
            if (cardId !== flipOne.id) {

                canFlip++;

                this.removeEventListener("click", clickCard);

                flipCard(cardId, this);

                setTimeout(function () {

                    compareCards(cardId);

                }, 1500);

            }

        }
        else {
            canFlip++;

            this.removeEventListener("click", clickCard);

            flipCard(cardId, this);

            setTimeout(function () {

                compareCards(cardId);

            }, 1500);


        }

    }

}
//Empty deck array, for each number of each suit add it to deck array.
function generateList() {

    fullDeck = [];

    const hearts = [
        "2r-heart",
        "3r-heart",
        "4r-heart",
        "5r-heart"
    ];

    const diamonds = [
        "2r-diamond",
        "3r-diamond",
        "4r-diamond",
        "5r-diamond"
    ];

    const spades = [
        "2b-spade",
        "3b-spade",
        "4b-spade",
        "5b-spade"
    ];

    const clubs = [
        "2b-club",
        "3b-club",
        "4b-club",
        "5b-club"
    ];

    for (let i = 0; i <= 3; i++) {
        fullDeck.push(hearts[i]);
        fullDeck.push(spades[i]);
        fullDeck.push(diamonds[i]);
        fullDeck.push(clubs[i]);
    }

    console.log(fullDeck);
}
//Pick a random number within size of remaining deck. The card with this index will be removed from deck.
function randomPick(whichArray) {
    let pick = Math.floor(Math.random() * (whichArray.length + 1));

    let pickCard = whichArray[pick];

    let x = whichArray.splice(pick - 1, 1);

    return x;
}
//Remove any cards already on the screen. Spawn new ones and give them specific values
function spawnCards() {

    for (let k = 0; k < activeCards.length; k++) {
        activeCards[k].remove();
    }

    playerAttempts = 0;
    matchesMade = 0;
    let whatScore = document.getElementById("what-score");
    whatScore.innerHTML = "Score: " + playerAttempts;

    generateList();

    let board = document.getElementById("main-game").children;

    let count = 0;

    for (let h = 0; h <= 3; h++) {
        for (let i = 0; i <= 3; i++) {

            let card = document.createElement("img");
            card.src = "assets/images/card-art/card-back.png";

            card.id = randomPick(fullDeck);
            card.addEventListener("click", clickCard);

            //card.style.position = "absolute";
            card.style.width = "4rem";

            //let calY = 13 + (7 * h);
            //let calX = 1.5 + (6 * i);

            //card.style.top = calY + "rem";
            //card.style.left = calX + "rem";

            board[h].appendChild(card);
            activeCards.push(card);

            count++;
        }
    }

    console.log(flipOne, flipTwo);

}
//Change content on screen to HTML for game screen
function setGame() {
    homeContainer.innerHTML =
        `
            <div class="container-game">
                <div class="top-game">
                    <div id="top-left">
                        <button
                        id="restart-game"
                        class="game-button"
                        >
                            Restart
                        </button>
                    </div>
                <div id="game-score">Score: 0</div>
                <div id="top-right">
                    <button id="quit-game" class="game-button">
                        Quit
                    </button>
                </div>
                </div>
                <div id="main-game">
                    <div id="gamerow-one" class="gamerow"></div>
                    <div id="gamerow-two" class="gamerow"></div>
                    <div id="gamerow-three" class="gamerow"></div>
                    <div id="gamerow-four" class="gamerow"></div>
                </div>
                <div class="bottom-game">
                    <div class="bottom-one">
                        <button id="info-game" class="game-button">
                            Info
                        </button>
                    </div>
                    <div class="bottom-two">
                        <button
                        id="highscore-game"
                        class="game-button"
                        >
                            Highscore
                        </button>
                    </div>
                </div>
            </div>
        `;
    let gameRestartButton = document.getElementById("restart-game");
    let gameQuitButton = document.getElementById("quit-game");
    let gameHighscoreButton = document.getElementById("highscore-game");
    let gameInfoButton = document.getElementById("info-game");
    gameRestartButton.addEventListener('click', openRestart);
    gameQuitButton.addEventListener('click', openQuit);
    gameHighscoreButton.addEventListener('click', openHighscore);
    gameInfoButton.addEventListener('click', clickInfo);
    let changeScore = document.getElementById("game-score");
    changeScore.innerHTML =
        `
            <h2 id="what-player">Player: </h2>
            <h2 id="what-score">Score: </h2>
        `;

    document.getElementById("what-player").innerHTML = "Player: " + playerName1;
    spawnCards();
}
//Open the modal for asking users name when they click play button
function clickPlay() {

    nameModal.style.display = "block";

    console.log(previousArray.length);
}
//Open the info modal
function clickInfo() {
    infoModal.style.display = "block";
}
//Close info modal when user clicks 'X'
function closeInfo() {
    infoModal.style.display = "none";
}
//Window click event for additional method of closing different modals. 
window.onclick = function (clickEvent) {
    if (clickEvent.target == infoModal) {
        infoModal.style.display = "none";
    }
    else if (clickEvent.target == quitModal) {
        quitModal.style.display = "none";
    }
    else if (clickEvent.target == restartModal) {
        restartModal.style.display = "none";
    }
    else if (clickEvent.target == highscoreModal) {
        highscoreModal.style.display = "none";
    }
    else if (clickEvent.target == noHighscoreModal) {
        noHighscoreModal.style.display = "none";
    }
};
//Open modal for quiting game 
function openQuit() {
    quitModal.style.display = "block";
}
//Call for home screen HTML and close modal that initiated quit
function confirmQuit(int) {
    setHome();
    if (int == 1) {
        quitModal.style.display = "none";
    } else {
        endgameModal.style.display = "none";
    }
}
//Close modal if user chooses 'no'
function denyQuit() {
    quitModal.style.display = "none";
}
//Open modal for restarting game
function openRestart() {
    restartModal.style.display = "block";
}
//Call for new cards and close modal that initiated restart
function confirmRestart(int) {
    spawnCards();
    if (int == 1) {
        restartModal.style.display = "none";
    } else {
        endgameModal.style.display = "none";
    }
}
//Close modal if user chooses 'no'
function denyRestart() {
    restartModal.style.display = "none";
}
//Prevent default form submission and validate/handle user inputted name. Start game.
function handleName(event) {
    event.preventDefault();
    let pName = document.getElementById("player-name");
    let nameIssue = document.getElementById("name-issue");
    let testVal = /^[A-Za-z]+$/;
    if (testVal.test(pName.value) === true){
        if (pName.value.length >= 9) {
            nameIssue.style.display = "block";
            nameIssue.innerHTML = "Make sure your username is 8 letters or less!"
        } else {
            playerName1 = pName.value;
            setGame();
            nameModal.style.display = "none";
            nameIssue.style.display = "none";
        }
    } else {
        nameIssue.style.display = "block";
        nameIssue.innerHTML = "Username must contain only letters and no spaces!"
        console.log(pName.value);
    }
}
//Make highscore screen visible and create new rows for each record in previousArray
function openHighscore() {

    if (previousArray.length >= 1) {
        highscoreModal.style.display = "block";

        let table = document.getElementById("score-table");

        table.innerHTML =
            `
                <tr id="table-headings">
                    <th id="heading-one">Name</th>
                    <th id="heading-two">Score</th>
                </tr>
            `;

        for (let i = 0; i < previousArray.length; i++) {
            let newRow = document.createElement("tr");

            newRow.innerHTML =
                `
                    <tr>
                        <td>${previousArray[i].previousName}</td>
                        <td>${previousArray[i].previousScore}</td>
                    </tr>
                `;

            table.append(newRow);
        }
    }
    else {
        noHighscoreModal.style.display = "block";
    }

}
//Add event listeners to required elements
nameForm.addEventListener('submit', handleName);
playButton.addEventListener('click', clickPlay);
infoButton.addEventListener('click', clickInfo);
closeInfoButton.addEventListener('click', closeInfo);
ingameQuitButton.addEventListener('click', function() {
    confirmQuit(1);
});
denyQuitButton.addEventListener('click', denyQuit);
ingameRestartButton.addEventListener('click', function() {
    confirmRestart(1);
});
denyRestartButton.addEventListener('click', denyRestart);
endgameQuitButton.addEventListener('click', function() {
    confirmQuit(2);
});
endgameRestartButton.addEventListener('click', function() {
    confirmRestart(2);
});