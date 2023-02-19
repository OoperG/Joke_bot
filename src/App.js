import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Joke from "./page/Joke";
import Mail from "./page/Mail";
import Reformulation from "./page/Reformulation";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Joke />} />
                <Route path="/mail" element={<Mail />} />
                <Route path="reformulation" element={<Reformulation/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
