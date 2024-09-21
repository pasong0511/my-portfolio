import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function SideMenu({ routes }: any) {
    const [isOpen, setIsOpen] = useState(false);

    const onClickSideMenu = () => {
        setIsOpen((state) => !state);
    };

    console.log("메뉴목록", routes);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div
                className={`open_menu ${isOpen ? "open" : ""}`}
                onClick={onClickSideMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            {isOpen && (
                <SideMenuList
                    isOpen={isOpen}
                    routes={routes}
                    handleClose={handleClose}
                />
            )}
        </>
    );
}

function SideMenuList({
    isOpen,
    routes,
    handleClose,
}: {
    isOpen: boolean;
    routes: any[];
    handleClose: any;
}) {
    const handleClick = () => {
        handleClose();
    };

    return (
        <div className={`ditail_menu ${isOpen ? "open" : ""}`}>
            <ul>
                {routes
                    .filter((route) => route.name) // name이 있는 경우에만 메뉴에 표시
                    .map((route, index) => (
                        <li key={index} onClick={handleClick}>
                            {route.children ? (
                                <>
                                    <span>{route.name}</span>
                                </>
                            ) : (
                                <Link to={route.path}>
                                    <span>{route.name}</span>
                                </Link>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default SideMenu;
