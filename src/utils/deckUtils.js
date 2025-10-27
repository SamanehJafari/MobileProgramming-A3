class Card{
    constructor (id, rank, suit, value){
        this.id=id;
        this.rank=rank;
        this.suit=suit;
        this.value=value; 
    }
}
export const createDeck=()=>{
    const suitArray = ['H', 'D', 'C', 'S'];
    const rankArray= ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let deck=[];
    let cardCount=1;
}
for (const suit of suitArray ){
    for (const rank in rankArray){
        let value;
        if (['K','Q','J'].includes(rank))
        {
            value=10;
        }
        else if (rank==='A')
        {
            value=11;
        }
        else
        {
            value=parsInt(rank)
        }
        deck.push(new Card(cardCount++,rank,suit,value));
    }
    return deck;
};
export const shuffleDeck=()=>{
    const shffleDeck=[...deck];//create a copy of array deck
    for (let i=shuffleDeck-1;i>0;i--) 
    {
       const j=Math.floor(Math.random()*i+1) //create random number for shuffling
       [shuffleDeck[i], shuffleDeck[j]]=[shuffleDeck[j], shuffleDeck[i]]//change the value of the items in the array with this statment
    }
    return shuffleDeck;
};
export const calculateHand=(hand)=>{
    //hand.reduc check items in the hand
    //sum is the sum of the values
    //cards is the card that we want to calculate
    //cards.value is the value of the cards
    let value=hand.reduc((sum,cards=>sum+cards.value , 0));
    return value;
}