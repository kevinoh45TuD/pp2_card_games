function clickPlay() {
    alert("Play");
}

function clickInfo() {
    alert("Info");
}

function clickCard() {
    console.log("Card: " + this.id);

    this.style.display = "none";
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

    console.log("x: " + x);
    console.log("which:" + whichArray);
    console.log("pick: " + pick);

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

            card.style.position = "fixed";
            card.style.width = "4rem";

            let calY = 15 + (8 * h);
            let calX = 2.5 + (6 * i);

            card.style.top = calY + "rem";
            card.style.left = calX + "rem";

            board.appendChild(card);

            count++;
        }
    }

}