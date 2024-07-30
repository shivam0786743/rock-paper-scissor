let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const messagecont = document.querySelector(".message-container");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randindx = Math.floor(Math.random() * 3);
  return options[randindx];
};
const draw = () => {
  console.log("game was draw.");
  message.innerText = "game was draw please try again";
  message.style.backgroungColor = " #081b31";
};
const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    console.log("YOU WIN!");
    message.innerText = `YOU WIN!! Your ${userchoice} beats ${compchoice}`;
    message.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    console.log("YOU LOSE!");
    message.innerText = `YOU LOSE!! ${compchoice} beats ${userchoice}`;
    message.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("user choice=", userchoice);
  //generate computer choice
  const compchoice = gencompchoice();
  console.log("compchoice=", compchoice);
  if (userchoice === compchoice) {
    draw();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
