import React from "react";
import { Link } from "react-router-dom";

import { RouteConfig } from "../../types/route";

export interface MainMenuListProps {
    routes: RouteConfig[];
    showSubmenu: number | null;
    handleMouseEnter: (index: number) => void;
    handleMouseLeave: () => void;
}

function MainMenuList({
    routes,
    showSubmenu,
    handleMouseEnter,
    handleMouseLeave,
}: MainMenuListProps) {
    return (
        <ul className="main-menu-list">
            {routes
                .filter((route) => route.name) // name이 있는 경우에만 메뉴에 표시
                .map((route, index) => (
                    <li
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className="menu-item"
                    >
                        {route.children ? (
                            <>
                                <span>{route.name}</span>
                                {showSubmenu === index && (
                                    <ul className="children-menu">
                                        {route.children.map(
                                            (
                                                child: any,
                                                childIndex: number
                                            ) => (
                                                <li key={childIndex}>
                                                    <a
                                                        href={
                                                            child.externalLink
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="children-menu-link"
                                                    >
                                                        <span>
                                                            {child.name}
                                                        </span>
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </>
                        ) : (
                            <Link to={route.path}>
                                <span>{route.name}</span>
                            </Link>
                        )}
                    </li>
                ))}
        </ul>
    );
}

export default MainMenuList;
