let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_btn = document.getElementById("reset_btn");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(word) {
    return (word === 'r') ? 'Rock' 
        : (word === 'p') ? 'Paper'
        : (word === 's') ? 'Scissors'
        : 'not available letter';  
}

function win(userChoice, computerChoice){
    const smallUserWord = "😆".fontsize(6).sup();
    const smallCompWord = "🖥".fontsize(6).sup();
    const choice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    choice_div.classList.add('green-glow');
    setTimeout(() => choice_div.classList.remove('green-glow'), 300);
    
    result_p.innerHTML = `${smallUserWord+convertToWord(userChoice)} beats ${smallCompWord+convertToWord(computerChoice)}, You win !!! 🔥`;

    
}

function lose(userChoice, computerChoice){
    const smallUserWord = "🤕".fontsize(6).sup();
    const smallCompWord = "🖥".fontsize(6).sup();
    const choice_div    = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    choice_div.classList.add('red-glow');
    setTimeout(() => choice_div.classList.remove('red-glow'), 300);

    result_p.innerHTML = `${smallUserWord + convertToWord(userChoice)} loses to ${smallCompWord +convertToWord(computerChoice)}, You lost... 😭`;
}

function draw(userChoice, computerChoice){
    const smallUserWord = "😐".fontsize(6).sup();
    const smallCompWord = "🖥".fontsize(6).sup();
    const choice_div = document.getElementById(userChoice);

    choice_div.classList.add('gray-glow');
    setTimeout(() => choice_div.classList.remove('gray-glow'), 300);

    result_p.innerHTML = `${smallUserWord + convertToWord(userChoice)} equals ${smallCompWord + convertToWord(computerChoice)}, It's a draw. 🍉`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice+computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
           win(userChoice, computerChoice);
           break;
        case 'sr':
        case 'rp':
        case 'ps':
           lose(userChoice, computerChoice);
           break;
        case 'ss':
        case 'rr':
        case 'pp':
           draw(userChoice, computerChoice);
           break;
    }
}

function reset() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function main(){
    reset_btn.addEventListener('click', () => reset());
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}

main();
