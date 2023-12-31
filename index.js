

document.addEventListener("DOMContentLoaded", function () {
    // generate random number
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    const refreshGame = () => {
        document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice"+randomNumber1+".png");
        document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice"+randomNumber2+".png");
    };
    refreshGame();

    const winners = () => {
        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        } else if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "Player 1 Wins!";
        } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = "Player 2 Wins!";
        }
    };

    winners();

});

