import './Card.css'

const Card = ({card}) => {
    function handleCardClick(event) {
        alert(event.currentTarget.id);
    }

    return (
        <div className='mtg-card'
             onClick={handleCardClick}
             title={card.title} // These can be accessed in event handler as event.currentTarget.title, etc.
             id={card.id}>
            <img src={'images/'.concat(card.image)} alt='Card' />
            <div>
                <b>{card.title}</b>
            </div>
        </div>
    )
}

export default Card;