class Deck {
    constructor() {
        const values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
        this.cards = [];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.cards.push(values[j] + " of " + suits[i]);
            }
        }
    }

    printCards() {
        for (let i = 0; i < this.cards.length; i++) {
            console.log(this.cards[i]);
        }
        return this;
    }

    shuffle() {
        for (let times = 0; times < 10; times++) {
            for (let i = 0; i < this.cards.length; i++) {
                let idx = Math.floor(Math.random() * this.cards.length);
                let temp = this.cards[i];
                this.cards[i] = this.cards[idx];
                this.cards[idx] = temp;
            }
        }
        return this;
    }

    reset() {
        let newDeck = new Deck();
        this.cards = newDeck.cards;
        return this;
    }

    deal() {
        const idx = Math.floor(Math.random() * this.cards.length);
        const card = this.cards[idx];
        this.cards.splice(idx, 1);
        return card;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    take(card) {
        this.cards.push(card);
        return this;
    }

    discard(card) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i] === card) {
                this.cards.splice(i, 1);
                return card;
            }
        }
    }
}

const deck = new Deck();
deck.shuffle();

console.log(deck.deal() + "\n");
deck.printCards();

const me = new Player("Danny");
me.take(deck.deal());
me.take(deck.deal());
me.take(deck.deal());
me.take(deck.deal());
me.take(deck.deal());
console.log("My cards: " + me.cards);
