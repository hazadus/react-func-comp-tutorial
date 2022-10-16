import {useState, useEffect} from "react";

import Collection from "../Collection/Collection";
import './Content.css'

const Content = ({cards, setCards, selectedDeck, setDeck}) => {

    function handleDeckSelectionChange(event) {
        setDeck(event.target.value)
    }

    return (
        <main>
            <h1>Cards Collection</h1>
            <div className='deckbar'>
                Select a deck:
                <select value={selectedDeck} onChange={handleDeckSelectionChange}>
                    <option value="Deck1">Deck 1</option>
                    <option value="Deck2">Deck 2</option>
                    <option value="Deck3">Deck 3</option>
                    <option value="Deck4">Deck 4</option>
                    <option value="Deck5">Deck 5</option>
                </select>
                &nbsp;This deck has {cards.filter((card) => card.deck === selectedDeck).length} cards.
            </div>
            <Collection cards={cards}
                        setCards={setCards}
                        selectedDeck={selectedDeck}
            />
        </main>
    )
}

export default Content;