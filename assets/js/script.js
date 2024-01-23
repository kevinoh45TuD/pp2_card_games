function clickPlay() {
    alert("Play");
}

function clickInfo() {
    alert("Info");
}

let fullDeck = [];

function generateList() {

    fullDeck = [];

    const hearts = [
        "2-heart",
        "3-heart",
        "4-heart",
        "5-heart"
    ];

    const diamonds = [
        "2-diamond",
        "3-diamond",
        "4-diamond",
        "5-diamond"
    ];

    const spades = [
        "2-spade",
        "3-spade",
        "4-spade",
        "5-spade"
    ];

    const clubs = [
        "2-club",
        "3-club",
        "4-club",
        "5-club"
    ];

    for (let i = 0; i <= 3; i++) {
        fullDeck.push(hearts[i]);
        fullDeck.push(spades[i]);
        fullDeck.push(diamonds[i]);
        fullDeck.push(clubs[i]);
    }

    console.log(fullDeck);
}

function spawnCards() {

    generateList();

    let board = document.getElementById("main-game");

    let count = 0;

    for (let h = 0; h <= 3; h++) {
        for (let i = 0; i <= 3; i++) {
            console.log(i);

            let card = document.createElement("img");
            card.src = "assets/images/spade-icon.png";

            card.id = "card" + count;

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