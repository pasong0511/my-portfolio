import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainMenuList from "../navigation/MainMenuList";
import SideMenu from "./SideMenu";

import { RouteConfig } from "../../types/route";

interface IHeaderProps {
    routes: RouteConfig[];
}

function Header({ routes }: IHeaderProps) {
    const [showSubmenu, setShowSubmenu] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setShowSubmenu(index);
    };

    const handleMouseLeave = () => {
        setShowSubmenu(null);
    };

    return (
        <div id="header">
            <div className="logo">
                <Link to={`/`}>
                    <img
                        src="/theme/portfolio/img/logo.svg"
                        alt="박진희 포트폴리오"
                        title=""
                    />
                </Link>
            </div>

            <nav>
                <MainMenuList
                    routes={routes}
                    showSubmenu={showSubmenu}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                />
            </nav>
            <SideMenu routes={routes} />
        </div>
    );
}

export default Header;
