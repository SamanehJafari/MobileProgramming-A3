import React from "react";

export default function Controls(
    {
        onDeal,
        onToss,
        onReset,
        handSize,
        pickedCount,
        decksize
    }
) {
    //if deck is empty ,deal button should disable
    let dealDisable;
    if (decksize === 0) dealDisable = true
    else dealDisable = false;

    //if there is not any card, the tossbutton should disable
    let tossDisable;
    if (pickedCount === 0)
        tossDisable = true
    else tossDisable = false;

    return (
        <div className="controls">
            {/*Button for deal */}
            <button
                onClick={onDeal}
                className="btn btn-deal"
                disabled={dealDisable}
            >
                Deal Card ({decksize})
            </button>
            <button
                onclick={onToss}
                className="btn btn-toss"
                disabled={tossDisable}
            >
                Toss({pickedCount})
            </button>
            {/*Reset Game*/}
            <button
                onClick={onResetGame}
                className="btn btn-reset"
            >
                Reset
            </button>
            {/* Add Regroup Deal 5, Deal 7 , WildCard, */}
        </div>
    );
}