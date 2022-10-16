import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState, useEffect} from "react";

function App() {
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
    const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cardsList')) || defaultCards)
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

    // 'Prop drilling' - pass props from parent to child components
      return (
            <Router>
                <Header/>
                <Routes>
                    <Route path='/'
                           element={
                            <>
                                <Content cards={cards}
                                         setCards={setCards}
                                         selectedDeck={selectedDeck}
                                         setDeck={setDeck}/>
                            </>
                           }>
                    </Route>
                </Routes>
                <Footer/>
            </Router>
      );
    }

export default App;