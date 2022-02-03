class Game {
    constructor(deck) {
        this._players = {
            "1": new Player(),
            "2": new Player() }
        this._deck = deck;
        this._element = document.querySelectorAll("deck");
        console.log(this.element);
        this.addClickListener()
        this._isPlayerTurn = "true";
    }

    dealCards () {
        const cardDeck = this._deck.cards;
        for (let i = 0; i < cardDeck.length; i++) {
            if (this._isPlayerTurn) {
                this._players["1"].setDealtCard(cardDeck[i]);
                this._isPlayerTurn = false;
            } else {
                this._players["2"].setDealtCard(cardDeck[i]);
                this._isPlayerTurn = true;
            }
        }
        console.log(this._players["1"].getDealtCards());
    }

    // Loop throguh to add event listeners
    addClickListener() {
        this._element.addEventListener("click", (event) => {
            event.target.innerHTML = "TEST";
            console.log("TEST");
        });
    }

    turnOverCard() {
        if (this._isPlayerTurn === true) {
            i
        }
    }
}

class Deck {
    constructor() {
        this._cards = [];
    }

    createDeck() {
        let suits = ['C', 'S', 'H', 'D'];
        let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                let image = `https://deckofcardsapi.com/static/img/${suits[i]}${ranks[j]}.png`
                this._cards.push(new Card(suits[i], ranks[j], image))
            }
        }
        console.log(this._cards);
    }

    shuffleCards() {
        this._cards.sort((a, b) => 0.5 - Math.random());
    }

    get element() {
        return this._element;
    }

    get cards() {
        return this._cards;
    }

}

class Card {
    constructor(suit, rank, image) {
        this._suit = suit;
        this._rank = rank;
        this._image = image;
    }
}

class Player {
    constructor() {
        this._dealtCards = [];
        this._inPlayCard = [];
        this._pointsTotal = 0;
    }

    setDealtCard(dealtCard) {
        this._dealtCards.push(dealtCard);
    }

    setInPlayCard(inPlayCard) {
        this._inPlayCard.push(inPlayCard);
    }

    getDealtCards() {
        return this._dealtCards; 
    }
}

const newDeck = new Deck();
newDeck.createDeck();
newDeck.shuffleCards();
const newGame = new Game(newDeck);
newGame.dealCards();