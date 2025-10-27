import React from "react";

export default function DeckArea({onDeal,decksize})
{
    //deck empty will true if deckSize=0
    const deckEmpty=deckSize===0;
    //define classes based on the situation
    let deckClass = 'deck-container';
  
    if (deckEmpty) {
      deckClass += ' deck-container-empty';
    }
     return (
        <div className="deck-area">
            <h2 className="text-xl font-semibold text-gray-700">Deck</h2>
            <div 
                onClick={deckEmpty ? null :onDealCard}//if deck is not empty call onDealCard
                className="deckClass"
                roll="button"
            >
            <p className="info-text">
                Deck remaining : ${deckSize}
            </p>

            </div>

        </div>
     );
}