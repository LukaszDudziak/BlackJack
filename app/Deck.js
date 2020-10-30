import { Card, Types, Weights } from './Card.js'

export class Deck{
    cards = [];
    
    constructor(){
        //tworzenie pełnego decka przez podwójną itercję
        Types.forEach((type) => Weights.forEach((weight) => this.cards.push(new Card(weight,type))));
    }
    //tasowanie
    shuffle(){
        for(let i = this.cards.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i);
            //"schowek" na aktualną kartę
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
        return this.cards;
    }

    //pobieranie jednej karty
    pickOne(){
        return this.cards.pop();
    }
}