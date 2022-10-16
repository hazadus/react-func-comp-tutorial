import {useState} from "react";
import './Collection.css'
import Card from "../Card/Card";


const Collection = ({cards, setCards, selectedDeck}) => {

    return (
        <div className='collection'>
        {
            cards.map((card) => {
                return (
                    <Card card={card}
                          cards={cards}
                          setCards={setCards}
                          selectedDeck = {selectedDeck}
                          key={card.id} />
                    )
            })
        }
        </div>
    )
}

export default Collection;