import React from "react";
import { Routes, Route } from "react-router-dom";

interface IHeaderProps {
    routes: any[];
}

function Content({ routes }: IHeaderProps) {
    return (
        <div id="content">
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
    );
}

export default Content;
