var cells = document.getElementsByClassName("cell");
var score_x = document.getElementById("score-x");
var score_o = document.getElementById("score-o");
var score_drow = document.getElementById("score-drow");
var round = document.getElementById("round");
var score_x_counter = 0;
var score_o_counter = 0;
var score_drow_counter = 0;
var buttons = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
];

var flags = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

var ply = "x";

function show_index(x, y) {
  if (document.getElementById("mode1").checked) {
    if (flags[x][y] == null) {
      if (ply == "x") {
        round.innerHTML = "The player's turn is o";
        flags[x][y] = "x";
        buttons[x][y].innerHTML = "x";
        buttons[x][y].classList.add("x");
        ply = "o";
      } else if (ply == "o") {
        round.innerHTML = "The player's turn is x";
        flags[x][y] = "o";
        buttons[x][y].innerHTML = "o";
        buttons[x][y].classList.add("o");
        ply = "x";
      }
    }
  } else if (document.getElementById("mode2").checked) {
    if (flags[x][y] == null) {
      if (ply == "x") {
        round.innerHTML = "The player's turn is o";
        flags[x][y] = "x";
        buttons[x][y].innerHTML = "x";
        buttons[x][y].classList.add("x");
        ply = "o";
      } else if (ply == "o") {
        round.innerHTML = "The player's turn is x";
        while (ply == "o") {
          x = Math.floor(Math.random() * 3);
          y = Math.floor(Math.random() * 3);

          if (flags[x][y] == null) {
            flags[x][y] = "o";
            buttons[x][y].classList.add("o");
            buttons[x][y].innerHTML = "o";
            ply = "x";
          }
        }
      }
    }
  }
  check_game();
}

function check_game() {
  var i, j;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (
        (flags[i][0] == "x" && flags[i][1] == "x" && flags[i][2] == "x") ||
        (flags[0][j] == "x" && flags[1][j] == "x" && flags[2][j] == "x")
      ) {
        round.innerHTML = "Competition WINNER : X";
        flags = "";
        score_x_counter++;
        score_x.innerHTML = score_x_counter;
      }
    }
  }
  if (
    (flags[0][0] == "x" && flags[1][1] == "x" && flags[2][2] == "x") ||
    (flags[0][2] == "x" && flags[1][1] == "x" && flags[2][0] == "x")
  ) {
    round.innerHTML = "Competition WINNER : X";
    flags = "";
    score_x_counter++;
    score_x.innerHTML = score_x_counter;
  }
  ///////////////////////////////////////////////
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (
        (flags[i][0] == "o" && flags[i][1] == "o" && flags[i][2] == "o") ||
        (flags[0][j] == "o" && flags[1][j] == "o" && flags[2][j] == "o")
      ) {
        round.innerHTML = "Competition WINNER : O";
        flags = "";
        score_o_counter++;
        score_o.innerHTML = score_o_counter;
      }
    }
  }
  if (
    (flags[0][0] == "o" && flags[1][1] == "o" && flags[2][2] == "o") ||
    (flags[0][2] == "o" && flags[1][1] == "o" && flags[2][0] == "o")
  ) {
    round.innerHTML = "Competition WINNER : O";
    flags = "";
    score_o_counter++;
    score_o.innerHTML = score_o_counter;
  }
  if (
    (flags[0][0] == "x" &&
      flags[0][1] == "x" &&
      flags[0][2] == "o" &&
      flags[1][0] == "o" &&
      flags[1][1] == "x" &&
      flags[1][2] == "x" &&
      flags[2][0] == "x" &&
      flags[2][1] == "o" &&
      flags[2][2] == "o") ||
    (flags[0][0] == "x" &&
      flags[0][1] == "o" &&
      flags[0][2] == "o" &&
      flags[1][0] == "o" &&
      flags[1][1] == "x" &&
      flags[1][2] == "x" &&
      flags[2][0] == "x" &&
      flags[2][1] == "x" &&
      flags[2][2] == "o") ||
      (flags[0][0] == "o" &&
      flags[0][1] == "x" &&
      flags[0][2] == "o" &&
      flags[1][0] == "o" &&
      flags[1][1] == "x" &&
      flags[1][2] == "o" &&
      flags[2][0] == "x" &&
      flags[2][1] == "o" &&
      flags[2][2] == "x") ||
      (flags[0][0] == "x" &&
      flags[0][1] == "o" &&
      flags[0][2] == "x" &&
      flags[1][0] == "o" &&
      flags[1][1] == "x" &&
      flags[1][2] == "x" &&
      flags[2][0] == "o" &&
      flags[2][1] == "x" &&
      flags[2][2] == "o")
  ) {
    round.innerHTML = "Your game is tied !!";
    flags = "";
    score_drow_counter++;
    score_drow.innerHTML = score_drow_counter;
  }
}

function now_game() {
  flags = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  var i, j;
  round.innerHTML = "";
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      buttons[i][j].innerHTML = "";
      buttons[i][j].classList.remove("x");
      buttons[i][j].classList.remove("o");
    }
  }
}
