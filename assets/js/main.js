"use strict"
// Zwischenspeicherung für die zukünftige Verwendung 

let userScore = 0;
let computerScore = 0;
const user_Score = document.querySelector('#user-score');
const comp_Score = document.querySelector('#computer-score');
const result = document.querySelector('#resultDefinition');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset');



//Die Kernfunktion für den Computer erstellt. Die math.random verwendet, um eine Schleife durch ein Array zu ziehen und den Wert zurückzugeben

const computerSelection = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

//Diese Funktion hat die aufgabe Kleinbuchstaben durch Großbuchstaben zu ersetzt

const convertEvent = (convert) => {
    if (convert === "paper") {
        return "Paper";
    } else if (convert === "scissors") {
        return "Scissors";
    } else {
        return "Rock";
    }
}

//In dieser Funktion erstelle ich die Gewinnbedingung - also hier wird gehandhabt, was passiert, wenn der Benutzer auf eine der Auswahlmöglichkeiten klickt, deren Wert er als Parameter weitergibt

const win = (user, computer) => {

    userScore++;
    user_Score.innerHTML = userScore;
    // console.log('user score is ' + userScore + ' ' + user);


    //Die Methode sup() wird verwendet, um einen String als hochgestellten Text anzuzeigen.Und mit Fontsize kann ich die größe so darstellen wie ich möchte, in meinem fall 5px.
    let userName = " (user)".fontcolor("green").fontsize(5).sup();
    const compName = " (comp)".fontsize(5).sup();

    //Hier greife ich auf die convertEvent funktion von Zeile 48 zurück, die wieder aus der computerSelection funktion generiert wird. Mit Math.random gib ich mir ein zufälliges wort wieder aus.
    result.innerHTML = `<p>${convertEvent(user)}${userName} beats ${convertEvent(computer)}${compName}. You win!</p>`;

    // old js, damit hole ich mir denn Parameter und speicher ihn in einer Konstante zwischen.
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add("winningStyles");
    //Das setTimeout() ist dafür da wie lange die funktion braucht es auszuführen, um die Klasse zu removen.
    setTimeout(() => roundStatus.classList.remove('winningStyles'), 500);
}

//In dieser Funktion erstelle ich quasi die selben Gewinnbedingung wie bei der function win, nur halt für denn losing zustand.

const loses = (user, computer) => {
    computerScore++;
    console.log('computer score is ' + computerScore + ' ' + computer);
    comp_Score.innerHTML = computerScore;
    const userName = ' (user)'.fontsize(5).sup();
    const compName = ' (comp)'.fontcolor("green").fontsize(5).sup();
    result.innerHTML = `<p>${convertEvent(computer)}${compName} beats ${convertEvent(user)}${userName}.You lose!</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('losingStyles');
    setTimeout(() => roundStatus.classList.remove('losingStyles'), 500);
}

// Draw Condition - hier wird gehandhabt, was passiert, wenn der Benutzer und der computer auf einen und der selben Auswahlmöglichkeiten klicken.

const draw = (user, computer) => {
    const userName = ' (user)'.fontcolor("#ffcc99").fontsize(5).sup();
    const compName = ' (comp)'.fontcolor("#ffcc99").fontsize(5).sup();
    let results = result.innerHTML = `<p>It was a draw! You both chose <br>${convertEvent(computer)}${compName}<br>${convertEvent(user)}${userName}</p>`;
    const roundStatus = document.getElementById(computer);
    roundStatus.classList.add('drawStyles');
    setTimeout(() => roundStatus.classList.remove('drawStyles'), 500);
}

// Die Kernfunktionen des Spiels, die die eigentliche Logik des Spiels bestimmt, z. B. Papier schlägt Stein usw. Also dachte ich mir vergleichen wir diese mit switch & case und bauen dafür folgende funktion...

const game = (userChoice) => {

    const computerChoice = computerSelection();
    console.log('Game function: user choice is = ' + userChoice);
    console.log('Game function: computer choice is = ' + computerChoice);



    switch (userChoice + computerChoice) {
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            console.log("user wins");
            break;
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            loses(userChoice, computerChoice);
            console.log("computer wins");
            break;
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            draw(userChoice, computerChoice);
            console.log("draw");
            break;
    }


    if (rounds() == input && user_Score > comp_Score) {
        nowRounds.innerHTML = 'Gewonnen';
    } else if (rounds() == input && user_Score > comp_Score) {
        nowRounds.innerHTML = 'verloren';
    } else if (rounds() == input && user_Score > comp_Score) {
        console.log('unentschieden')
    }

}

// Diese Funktion erstelle ich einen Eventlistener und füge ihn dem html-Element "Stein, Schere, Papier" hinzu und übergebe den Wert dieses Elements an die Spielfunktion

const main = () => {
    rock.addEventListener('click', () => game('rock'));
    paper.addEventListener('click', () => game('paper'));
    scissors.addEventListener('click', () => game('scissors'));
}
main();

// Dem Eventlistener füge ich dem html-Element span mit denn ID's user-score & computer-score zum ausgangspunkt (0) hinzu, und übergebe den Wert dieses Elements an die Spielfunktion

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    userScore = 0;
    computerScore = 0;
    user_Score.innerHTML = 0;
    comp_Score.innerHTML = 0;
});