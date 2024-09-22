import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideMenuList from "../navigation/SideMenuList";

function SideMenu({ routes }: any) {
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
                className={`open_menu ${isOpen ? "open" : ""}`}
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
            <SideMenuList routes={routes} handleClick={handleClick} />
        </div>
    );
}

export default SideMenu;
