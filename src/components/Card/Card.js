import './Card.css'

const Card = ({card, cards, setCards, selectedDeck}) => {
    function handleCardClick(event) {
        // described here: https://youtu.be/u6gSSpfsoOQ?t=2994
        const transformedCards = cards.map((i_card) => i_card.id === parseInt(event.currentTarget.id)
        ? (i_card.deck === selectedDeck) ? {...i_card, deck: ''} : {...i_card, deck:selectedDeck}
        : i_card);
        setCards(transformedCards);
    }

    return (
        <div className={(card.deck === selectedDeck) ? 'mtg-card selected' : 'mtg-card'}
             onClick={handleCardClick}
             title={card.title} // These can be accessed in event handler as event.currentTarget.title, etc.
             id={card.id}>
            <img src={'images/'.concat(card.image)} alt='Card' />
            <div>
                <b>{card.title}</b><br/>
                <b>Deck:</b> {card.deck}
            </div>
        </div>
    )
}

export default Card;