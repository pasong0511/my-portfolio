import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import routes from "./routes";
import Header from "./components/section/Header";
import Content from "./components/section/Content";
import Footer from "./components/section/Footer";

function App() {
    return (
        <Router>
            <div>
                <Header routes={routes} />
                <Content routes={routes} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
