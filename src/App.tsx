import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import routes from "./routes";
import Header from "./components/navigation/Header";

function App() {
    return (
        <Router>
            <div>
                <Header routes={routes} />

                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
