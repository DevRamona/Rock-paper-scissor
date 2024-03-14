const ForButtons = document.querySelectorAll('button');
const Final = document.getElementById('output');
const UserScore = document.getElementById('score1');
const ComputersScore = document.getElementById('computerScore');

let PlayerScore = 0;
let ComputerScore = 0;

ForButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const Outcome = PlayRound(button.id, ComputerPlay());
        Final.textContent = Outcome;
    })
})

function ComputerPlay() {
    const options = ["rock", "paper", "scissors"];
    const RandomOption = Math.floor(Math.random() * options.length);
    return options[RandomOption];
}

function PlayRound(UserChoice, ComputerChoice){
    if (UserChoice === ComputerChoice) {
        return "It's a tie !";
    } else if (
        (UserChoice === "rock" && ComputerChoice === "scissors") ||
        (UserChoice === "paper" && ComputerChoice === "rock") ||
        (UserChoice === "scissors" && ComputerChoice === "paper")
    ) {
        PlayerScore++;
        UserScore.textContent = PlayerScore;
        return "You won! " + UserChoice + " beats " + ComputerChoice;
    } else {
        ComputerScore++;
        ComputerScore.textContent = ComputerScore;
        return "You lost! " + ComputerChoice + " beats " + UserChoice;
    }
}