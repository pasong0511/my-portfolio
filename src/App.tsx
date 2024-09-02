import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import routes from "./routes";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        {routes
                            .filter((route) => route.name) // name이 있는 경우에만 메뉴에 표시
                            .map((route, index) => (
                                <li key={index}>
                                    <Link to={route.path}>{route.name}</Link>
                                </li>
                            ))}
                    </ul>
                </nav>

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
