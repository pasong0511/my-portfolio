import React, { useState } from "react";

import SideMenuList from "../navigation/SideMenuList";

import { RouteConfig } from "../../types/route";

interface SideMenuProps {
    routes: RouteConfig[];
}

interface SideMenuWrapperProps {
    isOpen: boolean;
    routes: RouteConfig[];
    handleClose: () => void;
}

function SideMenu({ routes }: SideMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const onClickSideMenu = () => {
        setIsOpen((state) => !state);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div
                className={`header-side-menu-button ${isOpen ? "open" : ""}`}
                onClick={onClickSideMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            {isOpen && (
                <SideMenuWrapper
                    isOpen={isOpen}
                    routes={routes}
                    handleClose={handleClose}
                />
            )}
        </>
    );
}

function SideMenuWrapper({
    isOpen,
    routes,
    handleClose,
}: SideMenuWrapperProps) {
    const handleClick = () => {
        handleClose();
    };

    return (
        <div className={`side-menu-overay ${isOpen ? "open" : ""}`}>
            <SideMenuList routes={routes} handleClick={handleClick} />
        </div>
    );
}

export default SideMenu;
