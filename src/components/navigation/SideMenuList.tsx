import React from "react";
import { Link } from "react-router-dom";

export interface SideMenuListProps {
    routes: any[];
    handleClick: () => void;
}

function SideMenuList({ routes, handleClick }: SideMenuListProps) {
    return (
        <ul>
            {routes
                .filter((route) => route.name) // name이 있는 경우에만 메뉴에 표시
                .map((route, index) => (
                    <li key={index} onClick={handleClick}>
                        {route.children ? (
                            <>
                                <span className="side_menu">{route.name}</span>
                                <ul>
                                    {route.children.map(
                                        (child: any, childIndex: number) => (
                                            <li key={childIndex}>
                                                <a
                                                    href={child.externalLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="submenu_link"
                                                >
                                                    {child.name}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </>
                        ) : (
                            <Link to={route.path}>
                                <span className="side_menu">{route.name}</span>
                            </Link>
                        )}
                    </li>
                ))}
        </ul>
    );
}

export default SideMenuList;
