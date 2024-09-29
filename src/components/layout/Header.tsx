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
            <nav>
                <div className="logo">
                    <Link to={`/`}>
                        <p>
                            PARK
                            <br />
                            JINHEE
                        </p>
                    </Link>
                </div>

                <MainMenuList
                    routes={routes}
                    showSubmenu={showSubmenu}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                />
                <SideMenu routes={routes} />
            </nav>
        </div>
    );
}

export default Header;
