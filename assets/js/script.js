
let flipOne = null;
let flipTwo = null;

let canFlip = 0;

function clickPlay() {
    alert("Play");
}

function clickInfo() {
    alert("Info");
}

function compareCards(comparisonCard) {
    if (flipOne === null) {
        flipOne = document.getElementById(comparisonCard);

    }
    else {
        flipTwo = document.getElementById(comparisonCard);

        if (flipOne.id[0] === flipTwo.id[0] && flipOne.id[1] === flipTwo.id[1]) {
            console.log("Match!");

            flipOne.remove();
            flipTwo.remove();

            flipOne = null;
            flipTwo = null;
        }
        else {

            console.log("No Match!");

            flipOne.src = "assets/images/card-art/card-back.png";
            flipTwo.src = "assets/images/card-art/card-back.png";

            flipOne = null;
            flipTwo = null;
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

    if (canFlip <= 1 && this.id !== flipOne) {
        canFlip++;

        console.log("Card: " + this.id);

        flipCard(this.id, this);

        setTimeout(function () {
            compareCards(this.id);
        }, 3000);
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

}