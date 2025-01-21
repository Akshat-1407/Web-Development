gameSeq = [];
userSeq = [];
level = 0;
gameStarted = false;
color = ["red", "yellow", "green", "purple"]

document.addEventListener("keypress", function() {
    if (gameStarted==false) {
        gameStarted = true;
        console.log("game has started");

        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h2 = document.querySelector("h2");
    h2.innerText = `Level ${level}`;

    randBtnSelector();    
}

allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function btnPress(btn) {
    pressedBtn = this;
    userFlash(pressedBtn);
    btnColor = pressedBtn.getAttribute("id");
    userSeq.push(btnColor);
    
    checkAns(userSeq.length-1);
}

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    } 
    else {
        h2.innerHTML = `Game Over! <br> <b style="color: red">Score: ${level-1}</b> <br> Press any key to restart`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        restart();
    }
}

function randBtnSelector() {
    randIdx = Math.floor(Math.random()*3);
    randColor = color[randIdx];
    randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log("Game Seq: ", gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add("game-flash");
    setTimeout(() => {
        btn.classList.remove("game-flash");
    }, 700);
}

function userFlash(btn) {
    btn.classList.add("user-flash");
    setTimeout(() => {
        btn.classList.remove("user-flash");
    }, 100);
}

function restart() {
    gameStarted = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}