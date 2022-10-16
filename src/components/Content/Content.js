import {useState} from "react";

import Collection from "../Collection/Collection";
import './Content.css'

const Content = () => {
    const [selectedDeck, setDeck] = useState('Deck3')

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
            </div>
            <Collection/>
        </main>
    )
}

export default Content;