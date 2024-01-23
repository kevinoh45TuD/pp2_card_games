function clickPlay() {
    alert("Play");
}

function clickInfo() {
    alert("Info");
}

function spawnCards() {

    let board = document.getElementById("main-game");

    for (let i = 0; i <= 3; i++) {
        console.log(i);

        let card = document.createElement("img");
        card.src = "assets/images/spade-icon.png";
        card.id = "card" + i;

        card.style.position = "fixed";
        card.style.width = "4rem";

        let calY = 15 + (8 * i);
        let calX = 2.5 + (6 * i);

        card.style.top = calY + "rem";
        card.style.left = calX + "rem";

        board.appendChild(card);
    }
}