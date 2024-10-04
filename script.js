let boxes = document.querySelectorAll(".buttons");

const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let counter = 0;
let turn = "X";
let lastWinner = "X";
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log(box);
    box.innerHTML = turn;
    winGame(turn, counter);

    if (turn == "X") {
      turn = "Y";
      box.style.background = "blue";
    } else {
      box.style.background = "green";
      turn = "X";
    }

    box.disabled = true;
    box.style.color = "white";

    counter++;
  });
});

let div = document.querySelector(".mess");
function winGame(turn, count) {
  let flag = false;
  for (const arr of win) {
    if (
      boxes[arr[0]].innerText != "" &&
      boxes[arr[1]].innerText != "" &&
      boxes[arr[2]].innerText != ""
    ) {
      if (
        boxes[arr[0]].innerText == boxes[arr[1]].innerText &&
        boxes[arr[1]].innerText == boxes[arr[2]].innerText
      ) {
        console.log("win");
        div.style.display = "block";
        flag = true;
        div.innerText = `You are winner ${turn}`;
        counter = 0;
        disableButtonIfUserWin();
        lastWinner = turn;
        break;
        // turn = 'X';
      }
    }
  }
  console.log(count);
  if (count == 8 && flag == false) {
    div.style.display = "block";
    div.innerText = `Game is draw`;
  }
}

disableButtonIfUserWin = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

function newGame() {
  turn = lastWinner;

  counter = 0;

  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.style.background = "white";
    div.style.display = "none";
    div.innerText = "";
  });
}

function resetGame() {
  turn = "X";
  counter = 0;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.style.background = "white";
    div.style.display = "none";
    div.innerText = "";
  });
}
