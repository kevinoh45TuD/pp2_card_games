function clickPlay() {
    alert("Play");
}

function clickInfo() {
    alert("Info");
}

function spawnCards() {

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