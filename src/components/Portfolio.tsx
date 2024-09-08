import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tab, { ITab } from "./Tab";
import CardList from "./CardList";
import { portfolioDatas, tabDatas } from "../data/data";
import Search from "./Search";
import SearchModal from "./SearchModal";

function Portfolio() {
    const [activeTab, setActiveTab] = useState<ITab>(tabDatas[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleActiveTab = (tab: ITab) => {
        setActiveTab(tab);
    };

    const filteredItems = portfolioDatas.filter((item) =>
        activeTab.kategorie === "all"
            ? true
            : item.kategorie === activeTab.kategorie
    );

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h2>Portfolio Page</h2>
            <Tab
                tabDatas={tabDatas}
                activeTab={activeTab}
                setActiveTab={handleActiveTab}
            />
            <Search setIsModalOpen={setIsModalOpen} />
            <div>
                <CardList filteredItems={filteredItems} />
            </div>
            <SearchModal isModalOpen={isModalOpen} onClose={handleClose} />
        </div>
    );
}

export default Portfolio;
