let boxes = document.querySelectorAll(".cell");
let reset = document.querySelector('.resetbutton');
let newgame = document.querySelector('.newgame');
let messagebox = document.querySelector('.message');
let winnername = document.querySelector('.winnername');

let turnO = true; 
let count = 0; 

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetgame = () => {
    turnO = true;
    count = 0; 
    enableboxes(); 
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if (turnO) {
            box.innerText = "O";
            box.classList.add('o');
            box.classList.remove('x'); 
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add('x'); 
            box.classList.remove('o'); 
            turnO = true;
        }

        box.disabled = true; 
        gamewinner(); 
    });
});

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false; 
        box.innerText = ''; 
        box.classList.remove('x', 'o'); 
        messagebox.classList.add('hide'); 
    }
};

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true; 
    }
};

const showwinner = (winner) => {
    winnername.innerText = `Congratulations, Winner is ${winner}`;
    messagebox.classList.remove('hide');
    disableboxes(); 
};

let gamewinner = () => {
    let isWinner = false; 

    for (let patterns of winpatterns) {
        let posval1 = boxes[patterns[0]].innerText;
        let posval2 = boxes[patterns[1]].innerText;
        let posval3 = boxes[patterns[2]].innerText;

        if (posval1 != '' && posval2 != '' && posval3 != '') {
            if (posval1 === posval2 && posval2 === posval3) {
                showwinner(posval1); 
                isWinner = true; 
                return; 
            }
        }
    }

    if (!isWinner && count === 9) {
        winnername.innerText = 'Draw, There is no Winner';
        messagebox.classList.remove('hide');
    }
};


newgame.addEventListener('click', resetgame);
reset.addEventListener('click', resetgame);
