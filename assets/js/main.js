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

//Die Variablen für die Rundenzähler
let form = document.querySelector('form');
let fieldset = document.querySelector('fieldset');
let input = document.querySelector('input[name="radio"]:checked');
let now = document.querySelector('#output1');
let max = document.querySelector('#output2');
let clicks = 0;
let nowCount = 0;


//Die Funktion für den Rundenzähler

const round = () => {
    fieldset.style.display = 'none';
    for (let i = 0; i < form.length; i++)
        if (form[i].checked) {
            max.innerHTML = form[i].value;
            clicks = form[i].value;
        }
    console.log();
};
form.addEventListener('click', () => round());

//Die Kernfunktion für den Computer erstellt. Die math.random verwendet, um eine Schleife durch ein Array zu ziehen und den Wert zurückzugeben

const computerSelection = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
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

console.log('clicks.: ' + clicks);
const win = (user, computer) => {
    userScore++;
    user_Score.innerHTML = userScore;
    nowCount++;
    computer = now.innerHTML = nowCount;
    // console.log('user score is ' + userScore + ' ' + user + ' : ' + ' Das ist der nowCount Rundenzähler .: ' + nowCount);
    let userName = " (user)".fontcolor("green").fontsize(5).sup();
    const compName = " (comp)".fontsize(5).sup();
    const winEmojis = ["😁", "💃🏽", "👏🏽", "😅", "😎", "🙌🏽"]
    const randomNumberEmoji = Math.floor(Math.random() * 6);
    result.innerHTML = `<p>${winEmojis[randomNumberEmoji]} ${convertEvent(user)}${userName} Beats ${convertEvent(computer)}${compName}. You win!</p> `;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add("winningStyles");
    setTimeout(() => roundStatus.classList.remove('winningStyles'), 500);
    if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML > comp_Score.innerHTML) {
        console.log('clicks.: ' + clicks);
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users.: ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = `${winEmojis[randomNumberEmoji]} Super du hast nach 5 Runden Gewonnen`
    } else if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML > comp_Score.innerHTML) {
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users ist größer < ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = `${winEmojis[randomNumberEmoji]} Super du hast nach 10 Runden Gewonnen`
    } else if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML > comp_Score.innerHTML) {
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users.: ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = `${winEmojis[randomNumberEmoji]} Super du hast nach 15 Runden Gewonnen`
    } else if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML > comp_Score.innerHTML) {
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users.: ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = `${winEmojis[randomNumberEmoji]} Super du hast nach 20 Runden Gewonnen`
    }

}

//In dieser Funktion erstelle ich quasi die selben Gewinnbedingung wie bei der function win, nur halt für denn losing zustand.

const loses = (user, computer) => {
    computerScore++;
    comp_Score.innerHTML = computerScore;
    nowCount++;
    now.innerHTML = nowCount;
    // console.log('computer score is ' + computerScore + ' ' + computer + ' : ' + ' Das ist der nowCount Rundenzähler .: ' + nowCount);
    const userName = ' (user)'.fontsize(5).sup();
    const compName = ' (comp)'.fontcolor("green").fontsize(5).sup();
    const loseEmojis = ["😩", "😾", "💩", "😭", "😡", "🤨", "🤦🏽"]
    const randomNumberEmoji = Math.floor(Math.random() * 7);
    result.innerHTML = `<p>${loseEmojis[randomNumberEmoji]} ${convertEvent(computer)}${compName} Beats ${convertEvent(user)}${userName}.You lose!</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('losingStyles');
    setTimeout(() => roundStatus.classList.remove('losingStyles'), 500);
    if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML < comp_Score.innerHTML) {
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users.: ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = `${loseEmojis[randomNumberEmoji]} Du hast leider nach 5 Runden Verloren`;
    } else if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML < comp_Score.innerHTML) {
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users.: ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = ` ${loseEmojis[randomNumberEmoji]} Du hast leider nach 10 Runden Verloren`;
    } else if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML < comp_Score.innerHTML) {
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users.: ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = ` ${loseEmojis[randomNumberEmoji]} Du hast leider nach 15 Runden Verloren`;
    } else if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML < comp_Score.innerHTML) {
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users.: ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = ` ${loseEmojis[randomNumberEmoji]} Du hast leider nach 20 Runden Verloren`;
    }

}

// Draw Condition - hier wird gehandhabt, was passiert, wenn der Benutzer und der computer auf einen und der selben Auswahlmöglichkeiten klicken.

// Ich habe auch versucht die abfrage, so abzufragen. Aber auch da funktioniert es auch nicht wie ich mir das vorstelle....
//else if (max.innerHTML === 10 && nowCount === 10 && user_Score.innerHTML < comp_Score.innerHTML)

const draw = (user, computer) => {
    nowCount++;
    now.innerHTML = nowCount;
    const userName = ' (user)'.fontcolor("#ffcc99").fontsize(5).sup();
    const compName = ' (comp)'.fontcolor("#ffcc99").fontsize(5).sup();
    const tieEmojis = ["🤯", "😱", "🙈", "🧐", "🙀", "🙃"];
    const randomNumberEmoji = Math.floor(Math.random() * 6);
    result.innerHTML = `<p>It was a draw! You both chose <br>${convertEvent(computer)}${compName}<br>${convertEvent(user)}${userName}</p> ${tieEmojis[randomNumberEmoji]}`;
    const roundStatus = document.getElementById(computer);
    roundStatus.classList.add('drawStyles');
    setTimeout(() => roundStatus.classList.remove('drawStyles'), 500);


    if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML == comp_Score.innerHTML) {
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users.: ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = `Unentschieden nach 5 Runden ${tieEmojis[randomNumberEmoji]} `;
    } else if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML == comp_Score.innerHTML) {
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users.: ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = `Unentschieden nach 10 Runden  ${tieEmojis[randomNumberEmoji]} `;
    } else if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML == comp_Score.innerHTML) {
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users.: ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = `Unentschieden nach 15 Runden  ${tieEmojis[randomNumberEmoji]} `;
    } else if (now.innerHTML === max.innerHTML && nowCount == clicks && user_Score.innerHTML == comp_Score.innerHTML) {
        console.log('Die gewählte Rundenanzahl.: ' + max.innerHTML);
        console.log('Die aktuelle Rundenanzahl.: ' + now.innerHTML);
        console.log('Die bisher gespielte runde.:' + nowCount);
        console.log(',wird verglichen mit.: ' + clicks);
        console.log('Spielstand des Users.: ' + user_Score.innerHTML);
        console.log('Spielstand des Computers.:' + comp_Score.innerHTML);
        result.innerHTML = `Unentschieden nach 20 Runden  ${tieEmojis[randomNumberEmoji]} `;
    }

}


// Die Kernfunktionen des Spiels, die die eigentliche Logik des Spiels bestimmt, z. B. Papier schlägt Stein usw. Also dachte ich mir vergleichen wir diese mit switch & case und bauen dafür folgende funktion...

const game = (userChoice) => {
    const computerChoice = computerSelection();
    // console.log('Game function: user choice is = ' + userChoice);
    // console.log('Game function: computer choice is = ' + computerChoice);

    switch (userChoice + computerChoice) {
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            // console.log("user wins");
            break;
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            loses(userChoice, computerChoice);
            // console.log("computer wins");
            break;
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            draw(userChoice, computerChoice);
            // console.log("draw");
            break;
    }

}


// Diese Funktion erstelle ich einen Eventlistener und füge ihn dem html-Element "Stein, Schere, Papier" hinzu und übergebe den Wert dieses Elements an die Spielfunktion

const main = () => {
    rock.addEventListener('click', () => game('rock'));
    paper.addEventListener('click', () => game('paper'));
    scissors.addEventListener('click', () => game('scissors'));
}
main();



resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    userScore = 0;
    computerScore = 0;
    user_Score.innerHTML = 0;
    comp_Score.innerHTML = 0;
    nowCount = 0;
    clicks = 0;
    now.innerHTML = 0;
    max.innerHTML = 0;
    fieldset.style.display = 'inherit';
    result.innerHTML = ` Let's Play again!`;
});