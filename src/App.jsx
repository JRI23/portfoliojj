import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './sass/_global.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./containers/home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;