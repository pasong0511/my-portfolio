import React from "react";
import { Link } from "react-router-dom";
import { RouteConfig } from "../../types/route";

export interface SideMenuListProps {
    routes: RouteConfig[];
    handleClick: () => void;
}

function SideMenuList({ routes, handleClick }: SideMenuListProps) {
    return (
        <ul className="side-menu-list">
            {routes
                .filter((route) => route.name) // name이 있는 경우에만 메뉴에 표시
                .map((route, index) => (
                    <li key={index} onClick={handleClick} className="menu-item">
                        {route.children ? (
                            <>
                                {route?.submenu_display ? (
                                    <span>{route.name}</span>
                                ) : null}
                                <ul className="children-menu">
                                    {route.children.map(
                                        (child: any, childIndex: number) => (
                                            <li key={childIndex}>
                                                <a
                                                    href={child.externalLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`children-menu-link ${
                                                        child?.icon
                                                            ? "icon"
                                                            : ""
                                                    }`}
                                                >
                                                    {child?.icon ? (
                                                        child?.icon
                                                    ) : (
                                                        <span>
                                                            {child.name}
                                                        </span>
                                                    )}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
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

export default SideMenuList;
