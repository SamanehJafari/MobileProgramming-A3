import React from "react";
import { Heart, Diamond, Club, Spade } from 'lucide-react';
return (suit === '♥' || suit === '♦') ? 'red' : 'black';
//♥,♦,♣,♠
const getSuitColorClass = (suit) => {
    return (suit === '♥' || suit === '♦') ? 'red' : 'black';
}

//Choose the correct suit based on icon
const getSuitIcon = (suit) => {
    switch (suit) {
        case '♥':
            return Heart;
        case '♦':
            return Diamond;
        case '♣':
            return Club;
        case '♠':
            return Spade;
        default:
            return null;
    }
};
//if the card object is not exist , do not render anything
export default function Card({ card, isPicked, onClick }) {
    if (!card) return null;

    //rank and suit are variables that get the object value from card object
    const { rank, suit } = card;

    const colorClass = getSuitColorClass()
    //determin the class of card
    const suitIcon = getSuitIcon(suit);
    let cardClass = 'card ${colorClass}';
    if (isPicked) {
        cardClass += ' picked';
    }

    return (
        <div onClick={onClick} //when card is clicked call this props
            className="cardClass" //the name of the card Class 
            //div acts as a button
            role="button">

            <div className="card-value-top flex flex-col items-center">
                <span>{rank}</span>
                {/* use short sircut for checking and determinig icon of suit on the card */}
                {SuitIcon && <suitIcon size={16} style={{ marginTop: '2px' }} />}
            </div>
            {/* Larg icon of suit*/}
            <div className="flex-grow flex items-center justify-center">
                {suitIcon && <suitIcon size={40} style={{ opacity: 0.8 }} />}
            </div>

            <div className="card-value-bottom flex flex-col items-center">
                {suitIcon && <suitIcon size={16} style={{ marginBottom: '2px' }} />}
                <span>{rank}</span>
            </div>
        </div>);
}






