
const infoModal = document.getElementById("info-modal");
const homeContainer = document.getElementById("home");
const quitModal = document.getElementById("quit-modal");

let flipOne = null;
let flipTwo = null;

let canFlip = 0;

let playerAttempts = 0;

function setHome() {
    home.innerHTML =
        `
        <div class="home-text">
          <p class="dark-text">
            Welcome to Card Games!
            <br /><br />
            Here you will be able to play match, the main objective is to flip
            cards till you find a pair.
            <br />
            You can either startplaying or get more information about the game
            below.
            <br />
          </p>
          <a href="game.html">Game</a>
        </div>
        <div class="home-buttons">
          <button id="button-play" class="hbutton" onclick="clickPlay()">
            <i class="fa-solid fa-play"></i>
          </button>

          <div id="play-text" class="dark-text">
            <h3>Play</h3>
          </div>

          <button id="button-info" class="hbutton" onclick="clickInfo()">
            <i class="fa-solid fa-info"></i>
          </button>

          <div id="info-text" class="dark-text">
            <h3>Info</h3>
          </div>
        </div>
      </div>
      <div id="info-modal" class="modal">
        <div class="modal-content">
          <button id="close-modal" class="modal-button" onclick="closeInfo()">
            <i class="fa-solid fa-x"></i>
          </button>
          <p>
            The goal of Match is to clear the board by matching pairs in the
            fewest turns possible. <br />
            If the two selected cards are matching in number and color they will
            be removed from the game, <br />
            otherwise they will be flipped back over and you will select again.
            <br />
            <br />
            This game is also known as 'Memory'.
          </p>
        </div>
      </div>
      <div id="quit-modal" class="modal">
        <div class="modal-content">
          <p>Quit Game?</p>
          <div class="yes-no">
            <button class="choice-button" onclick="confirmQuit()">Yes</button>
            <button class="choice-button" onclick="denyQuit()">No</button>
          </div>
        </div>
    `;
}

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

            flipOne.remove();
            flipTwo.remove();

            flipOne = null;
            flipTwo = null;

            playerAttempts++;
            let changeScore = document.getElementById("game-score");
            changeScore.innerHTML = "Score: " + playerAttempts;
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
            let changeScore = document.getElementById("game-score");
            changeScore.innerHTML = "Score: " + playerAttempts;
        }

        canFlip = 0;
    }
}

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

let fullDeck = [];

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

function randomPick(whichArray) {
    let pick = Math.floor(Math.random() * (whichArray.length + 1));

    let pickCard = whichArray[pick];

    let x = whichArray.splice(pick - 1, 1);

    return x;
}

function spawnCards() {

    playerAttempts = 0;

    generateList();

    let board = document.getElementById("main-game");

    let count = 0;

    for (let h = 0; h <= 3; h++) {
        for (let i = 0; i <= 3; i++) {
            let card = document.createElement("img");
            card.src = "assets/images/card-art/card-back.png";

            card.id = randomPick(fullDeck);
            card.addEventListener("click", clickCard);

            card.style.position = "absolute";
            card.style.width = "4rem";

            let calY = 13 + (7 * h);
            let calX = 1.5 + (6 * i);

            card.style.top = calY + "rem";
            card.style.left = calX + "rem";

            board.appendChild(card);

            count++;
        }
    }

    console.log(flipOne, flipTwo);

}

function setGame() {
    home.innerHTML =
     `
        <div class="container-game">
        <div class="top-game">
          <div id="top-left">
            <button
              id="restart-game"
              class="game-button"
              onclick="openRestart()"
            >
              Restart
            </button>
          </div>

          <div id="game-score">Score: 0</div>

          <div id="top-right">
            <button id="quit-game" class="game-button" onclick="openQuit()">
              Quit
            </button>
          </div>
        </div>
        <div id="main-game"></div>
        <div class="bottom-game">
          <div class="bottom-one">
            <button id="info-game" class="game-button" onclick="clickInfo()">
              Info
            </button>
          </div>
          <div class="bottom-two">
            <button
              id="highscore-game"
              class="game-button"
              onclick="openHighscore()"
            >
              Highscore
            </button>
          </div>
        </div>
      </div>
    `;

    spawnCards();
}

function clickPlay() {
    setGame();
}

//Info
function clickInfo() {
    infoModal.style.display = "block";
}

function closeInfo() {
    infoModal.style.display = "none";
};

window.onclick = function (clickEvent) {
    if (clickEvent.target == infoModal) {
        infoModal.style.display = "none";
    }
    else if (clickEvent.target == quitModal) {
        quitModal.style.display = "none";
    }
};

//Close Game
function openQuit() {
    quitModal.style.display = "block";
}

function confirmQuit() {
    setHome();
    quitModal.style.display = "none";
}

function denyQuit() {
    quitModal.style.display = "none";
}

//Restart Game
function openRestart() {

}

function confirmRestart() {

}

function denyRestart() {

}

