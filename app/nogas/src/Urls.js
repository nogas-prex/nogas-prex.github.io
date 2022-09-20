import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './views/Home'

export default function Urls() { 


    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
            
                <Route exact path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}