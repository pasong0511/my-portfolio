import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import routes from "./routes";
import Header from "./components/layout/Header";
import Content from "./components/section/Content";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <Router>
            <div id="app">
                <Header routes={routes} />
                <Content routes={routes} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
