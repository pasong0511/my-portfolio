import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tab, { ITab } from "./Tab";
import CardList from "./CardList";
import { portfolioDatas, tabDatas } from "../data/data";
import Search from "./Search";
import SearchModal from "./SearchModal";

function Portfolio() {
    const [activeTab, setActiveTab] = useState<ITab>(tabDatas[0]);

    const handleActiveTab = (tab: ITab) => {
        setActiveTab(tab);
    };

    const filteredItems = portfolioDatas.filter((item) =>
        activeTab.kategorie === "all"
            ? true
            : item.kategorie === activeTab.kategorie
    );

    const handleClose = () => {};

    return (
        <div>
            <h2>Portfolio Page</h2>
            <Tab
                tabDatas={tabDatas}
                activeTab={activeTab}
                setActiveTab={handleActiveTab}
            />
            <Search />
            <div>
                <CardList filteredItems={filteredItems} />
            </div>
            <SearchModal isOpen={true} onClose={handleClose} />
        </div>
    );
}

export default Portfolio;
