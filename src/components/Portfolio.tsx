import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tab, { ITab } from "./Tab";
import CardList from "./CardList";
import { portfolioDatas, tabDatas } from "../data/data";

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

    return (
        <div>
            <h2>Portfolio Page</h2>
            <Tab
                tabDatas={tabDatas}
                activeTab={activeTab}
                setActiveTab={handleActiveTab}
            />
            <div>
                <CardList filteredItems={filteredItems} />
            </div>
        </div>
    );
}

export default Portfolio;
