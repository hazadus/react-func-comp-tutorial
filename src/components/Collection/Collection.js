import {useState} from "react";
import './Collection.css'
import Card from "../Card/Card";

const defaultCards = [
    {
        id: 1,
        title: 'Mayhem Devil',
        set: 'WAR',
        image: 'MayhemDevil.jpg',
    },
    {
        id: 2,
        title: 'Priest of Forgotten Gods',
        set: 'RAV',
        image: 'PriestOfTheForgottenGods.jpg',
    },
    {
        id: 3,
        title: 'Cauldron Familiar',
        set: 'ELD',
        image: 'CauldronFamiliar.jpg',
    },
    {
        id: 4,
        title: 'Witch\'s Oven',
        set: 'ELD',
        image: 'WitchsOven.jpg',
    },
    {
        id: 5,
        title: 'Woe Strider',
        set: 'ELD',
        image: 'WoeStrider.jpg',
    },
]

const Collection = () => {
    // Returns a "stateful value" and a function to update it.
    // 'setCards' is function reference and is used whenever we need to change 'cards'.
    // When 'cards' changed through the 'setCards' call, Collection component is re-rendered.
    const [cards, setCards] = useState(defaultCards)

    return (
        <div className='collection'>
        {
            cards.map((card) => {
                return (
                    <Card card={card} key={card.id} />
                    )
            })
        }
        </div>
    )
}

export default Collection;