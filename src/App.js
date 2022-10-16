import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/'
                       element={
                        <>
                            <Content/>
                        </>
                       }>
                </Route>
            </Routes>
            <Footer/>
        </Router>
  );
}

export default App;