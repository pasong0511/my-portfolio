import React from "react";
import { Routes, Route } from "react-router-dom";

import { RouteConfig } from "../../types/route";

interface IContentProps {
    routes: RouteConfig[];
}

function Content({ routes }: IContentProps) {
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
