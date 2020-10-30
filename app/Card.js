export const Weights = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
];

export const Types = ['spades','hearts','diamonds','clubs'];

export class Card{
    //mapa odnośników dla poszczególnych typów kart
    mapTextToSign = {
        hearts: '&hearts;',
        spades: '&spades;',
        diamonds: '&diams;',
        clubs: '&clubs;',
    };

    constructor(weight, type){
        this.weight = weight;
        this.type = type;
    }

    render(){
        //tworzenie karty do wyświetlenia 
        const card = document.createElement('div');
        card.setAttribute('class', `card ${this.type}`);
        //wyświetlnie wartości
        card.innerHTML = `${this.weight} ${this.mapTextToSign[this.type]}`; 

        return card
    }
}