// Make objects - Cards with values suits. Two Players / Shuffle


class Card {
    constructor(suit, face, value) {

        this.suit = suit;
        this.face = face;
        this.value = value;
    }
}

let values = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
let suits = ["♠️","♣️","🔷","💙"];

let deckOfCards = [];

for (let v = 0; v < values.length; v++) {
    for (let s = 0; s < suits.length; s++) {
        let card = new Card(suits[s],values[v], v + 2);
        deckOfCards.push(card);
    }
    
}

// console.log(deckOfCards);

//function to make deck and shuffle

class Deck {
    constructor() {
        this.entireDeck = this.makeDeck();
    }

    makeDeck() {
        let values = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
        let suits = ["♠️","♣️","🔷","💙"];

        let deckOfCards = [];

        for (let v = 0; v < values.length; v++) {
            for (let s = 0; s < suits.length; s++) {
                let card = new Card(suits[s],values[v], v + 2);
                deckOfCards.push(card);
            }

        }
        deckOfCards = deckOfCards.sort((a,b) => 0.5 - Math.random());

        return deckOfCards;
    }

}

// create deck for game

const warDeck = new Deck();

console.log(warDeck);



//create players
// Deal 26 Cards to each Player from a Deck of 52 cards.

class Player {
    constructor(name, hand, score) {
        this.name = name;
        this.hand = hand;
        this.score = score;

        
    }

    createPlayer1() {
        this.name = "Bob"
        this.hand = warDeck.entireDeck.splice(0,26);
        this.score = [];
    }

    createPlayer2() {
        this.name = "Nick"
        this.hand = warDeck.entireDeck.splice(0,26);
        this.score = [];
    }

    
}



//Create players for War Game

const warPlayer1 = new Player();
warPlayer1.createPlayer1();
console.log(warPlayer1);

const warPlayer2 = new Player();
warPlayer2.createPlayer2();
console.log(warPlayer2);


// Deal Cards and determine winner.

function playWarGame(array1, array2) {
    if (array1 > array2) {
        return warPlayer1.score.push('win');
    } else if (array2 > array1) {
        return warPlayer2.score.push('win');
    } else {
        return "tie";
    }
}

// Iterate through the turns where each Player plays a Card.


console.log(playWarGame(warPlayer1.hand[0].value, warPlayer2.hand[0].value));
console.log(playWarGame(warPlayer1.hand[1].value, warPlayer2.hand[1].value));
console.log(playWarGame(warPlayer1.hand[2].value, warPlayer2.hand[2].value));
console.log(playWarGame(warPlayer1.hand[3].value, warPlayer2.hand[3].value));
console.log(playWarGame(warPlayer1.hand[4].value, warPlayer2.hand[4].value));
console.log(playWarGame(warPlayer1.hand[5].value, warPlayer2.hand[5].value));
console.log(playWarGame(warPlayer1.hand[6].value, warPlayer2.hand[6].value));
console.log(playWarGame(warPlayer1.hand[7].value, warPlayer2.hand[7].value));
console.log(playWarGame(warPlayer1.hand[7].value, warPlayer2.hand[7].value));
console.log(playWarGame(warPlayer1.hand[8].value, warPlayer2.hand[8].value));
console.log(playWarGame(warPlayer1.hand[9].value, warPlayer2.hand[9].value));
console.log(playWarGame(warPlayer1.hand[10].value, warPlayer2.hand[10].value));
console.log(playWarGame(warPlayer1.hand[11].value, warPlayer2.hand[11].value));
console.log(playWarGame(warPlayer1.hand[12].value, warPlayer2.hand[12].value));
console.log(playWarGame(warPlayer1.hand[13].value, warPlayer2.hand[14].value));
console.log(playWarGame(warPlayer1.hand[14].value, warPlayer2.hand[14].value));
console.log(playWarGame(warPlayer1.hand[15].value, warPlayer2.hand[15].value));
console.log(playWarGame(warPlayer1.hand[16].value, warPlayer2.hand[16].value));
console.log(playWarGame(warPlayer1.hand[17].value, warPlayer2.hand[17].value));
console.log(playWarGame(warPlayer1.hand[18].value, warPlayer2.hand[18].value));
console.log(playWarGame(warPlayer1.hand[19].value, warPlayer2.hand[19].value));
console.log(playWarGame(warPlayer1.hand[20].value, warPlayer2.hand[20].value));
console.log(playWarGame(warPlayer1.hand[21].value, warPlayer2.hand[21].value));
console.log(playWarGame(warPlayer1.hand[22].value, warPlayer2.hand[22].value));
console.log(playWarGame(warPlayer1.hand[23].value, warPlayer2.hand[23].value));
console.log(playWarGame(warPlayer1.hand[24].value, warPlayer2.hand[24].value));
console.log(playWarGame(warPlayer1.hand[25].value, warPlayer2.hand[25].value));


console.log(warPlayer1.score);

console.log(warPlayer2.score);

// The Player who played the higher card is awarded a point
// Ties result in zero points for both Players

console.log(`Player 1 ${warPlayer1.name} has ${warPlayer1.score.length} points & Player 2 ${warPlayer2.name} has ${warPlayer2.score.length} points.`)

// function checkWin() {

function whoWonWarGame(array1, array2) {
    if (array1.length > array2.length) {
        return `Player 1 ${warPlayer1.name} WINS!`;
    } else if (array2.length > array1.length) {
        return `Player 2 ${warPlayer2.name} WINS!`;
    } else {
        return `Tie Game: Would ${warPlayer1.name} & ${warPlayer2.name} like to play again? \n PRESS REFRESH ON BROWSER TO START NEW GAME.`;
    }
}

// After all cards have been played, display the score and declare the winner.


console.log(whoWonWarGame(warPlayer1.score, warPlayer2.score))


// Write a Unit Test using Mocha and Chai for at least one of the functions you write.


