import {useState, useEffect} from "react";

import Collection from "../Collection/Collection";
import './Content.css'

const Content = () => {
    const defaultCards = [
    {
        id: 1,
        title: 'Mayhem Devil',
        set: 'WAR',
        image: 'MayhemDevil.jpg',
        deck: '',
    },
    {
        id: 2,
        title: 'Priest of Forgotten Gods',
        set: 'RAV',
        image: 'PriestOfTheForgottenGods.jpg',
        deck: '',
    },
    {
        id: 3,
        title: 'Cauldron Familiar',
        set: 'ELD',
        image: 'CauldronFamiliar.jpg',
        deck: '',
    },
    {
        id: 4,
        title: 'Witch\'s Oven',
        set: 'ELD',
        image: 'WitchsOven.jpg',
        deck: '',
    },
    {
        id: 5,
        title: 'Woe Strider',
        set: 'ELD',
        image: 'WoeStrider.jpg',
    },
]

    // Returns a "stateful value" and a function to update it.
    // 'setCards' is function reference and is used whenever we need to change 'cards'.
    // When 'cards' changed through the 'setCards' call, Collection component is re-rendered.
    // const [cards, setCards] = useState(defaultCards)
    const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cardsList')) || defaultCards)
    // const [selectedDeck, setDeck] = useState('Deck3')
    const [selectedDeck, setDeck] = useState(JSON.parse(localStorage.getItem('selectedDeck')) || 'Deck3')

    // What function to execute ... when what changes ...
    // [] - 'effect' will be executed only when component first loads
    useEffect(() => {
        // When the 'cards' changing, we're updating local storage
        localStorage.setItem('cardsList', JSON.stringify(cards))
    }, [cards]);
    useEffect(() => {
        localStorage.setItem('selectedDeck', JSON.stringify(selectedDeck))
    }, [selectedDeck]);

    function handleDeckSelectionChange(event) {
        setDeck(event.target.value)
    }

    // 'Prop drilling' - pass props from parent to child components
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