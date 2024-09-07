import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tab, { ITab } from "./Tab";

const tabDatas = [
    { number: 0, label: "전체", kategorie: "all" },
    { number: 1, label: "홈페이지", kategorie: "홈페이지" },
    { number: 2, label: "기획", kategorie: "기획" },
    { number: 3, label: "웹디자인", kategorie: "웹디자인" },
    {
        number: 4,
        label: "시각디자인",
        kategorie: "시각디자인",
    },
];

const portfolioDatas = [
    { id: 1, title: "Homepage Project 1", kategorie: "홈페이지" },
    { id: 2, title: "Planning Project 1", kategorie: "기획" },
    { id: 3, title: "Web Design Project 1", kategorie: "웹디자인" },
    { id: 4, title: "Visual Design Project 1", kategorie: "시각디자인" },
    { id: 5, title: "Homepage Project 2", kategorie: "홈페이지" },
    { id: 6, title: "Planning Project 2", kategorie: "기획" },
    { id: 7, title: "Web Design Project 2", kategorie: "웹디자인" },
    { id: 8, title: "Visual Design Project 2", kategorie: "시각디자인" },
];

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
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>
                        <Link to={`/portfolio/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Portfolio;
