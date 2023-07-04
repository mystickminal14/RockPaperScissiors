const option = document.getElementsByClassName("option")[0];
const playBtn = document.getElementById("play");
const chose = document.getElementsByClassName("choose")[0];
const chose2 = document.getElementsByClassName("choose")[1];
const guest = document.getElementsByClassName("player")[0];
const guest1 = document.getElementsByClassName("player")[1];
const title = document.getElementsByClassName("title")[0];
const title2 = document.getElementsByClassName("title")[2];

let score = 0;
let score2 = 0;
const who=document.getElementsByClassName("windiv")[0]
  const hh=document.getElementById("win")
function resetGame() {
  score = 0;
  score2 = 0;
  title.innerHTML = `<h1>Score: ${score}</h1>`;
  title2.innerHTML = `<h1>Score: ${score2}</h1>`;
  guest.innerHTML = "";
  who.style.display="none";
  guest1.innerHTML = "";
}

playBtn.addEventListener('click', function () {
  if (score === 5 || score2 === 5) {
    resetGame();
  }
  option.style.display = "block";
  option.style.transition = "3s";
  chose.style.display = "none";
  chose2.style.display = "none";
});

const arr = ['👊', '🖐️', '✌️'];

function getRandomChoice() {
  return arr[Math.floor(Math.random() * arr.length)];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (
    (playerChoice === '👊' && computerChoice === '✌️') ||
    (playerChoice === '🖐️' && computerChoice === '👊') ||
    (playerChoice === '✌️' && computerChoice === '🖐️')
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function updateScore(winner) {
  if (winner === "player") {
    score++;
    title.innerHTML = `<h1>Score: ${score}</h1>`;
  } else if (winner === "computer") {
    score2++;
    title2.innerHTML = `<h1>Score: ${score2}</h1>`;
  }
}

const rock = document.getElementsByClassName("opt")[0];
const paper = document.getElementsByClassName("opt")[1];
const scissors = document.getElementsByClassName("opt")[2];

rock.addEventListener('click', function () {
  if (score < 5 && score2 < 5) {
    const playerChoice = '👊';
    const computerChoice = getRandomChoice();
    guest.innerHTML = "<h1>👊</h1>";
    guest1.innerHTML = `<h1>${computerChoice}</h1>`;
    const winner = determineWinner(playerChoice, computerChoice);
    updateScore(winner);
    checkWinner();
  }
});

paper.addEventListener('click', function () {
  if (score < 5 && score2 < 5) {
    const playerChoice = '🖐️';
    const computerChoice = getRandomChoice();
    guest.innerHTML = "<h1>🖐️</h1>";
    guest1.innerHTML = `<h1>${computerChoice}</h1>`;
    const winner = determineWinner(playerChoice, computerChoice);
    updateScore(winner);
    checkWinner();
  }
});
scissors.addEventListener('click', function () {
    if (score < 5 && score2 < 5) {
      const playerChoice = '✌️';
      const computerChoice = getRandomChoice();
      guest.innerHTML = "<h1>✌️</h1>";
      guest1.innerHTML = `<h1>${computerChoice}</h1>`;
      const winner = determineWinner(playerChoice, computerChoice);
      updateScore(winner);
      checkWinner();
    }
  });
  
  function checkWinner() {
    if (score === 5) {
      option.style.display = "none";
      chose.style.display = "block";
      who.style.display="flex"
      chose.innerHTML = "<h1>Player Wins!</h1>";
      hh.innerHTML="PLAYER WINS"
    } else if (score2 === 5) {
      option.style.display = "none";
      chose2.style.display = "block";
      chose2.innerHTML = "<h1>Computer Wins!</h1>";
      who.style.display="flex"
      chose.innerHTML = "<h1>Player Wins!</h1>";
      hh.innerHTML="COMPUTER WINS"
    }
  }
  