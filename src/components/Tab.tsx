import React, { useState } from "react";

export interface ITabProps {
    tabDatas: ITab[];
    activeTab?: ITab;
    setActiveTab: any;
}

export interface ITab {
    number: number;
    label: string;
    kategorie: string;
}

function Tab({ tabDatas, activeTab, setActiveTab }: ITabProps) {
    const handleClick = (tab: ITab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <nav>
                <ul className="menu_tab">
                    {tabDatas.map((tab) => (
                        <TabItem
                            key={tab.kategorie}
                            tab={tab}
                            isActive={activeTab?.kategorie === tab.kategorie}
                            onClick={handleClick}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
}

function TabItem({
    tab,
    isActive,
    onClick,
}: {
    tab: ITab;
    isActive: boolean;
    onClick: (tab: ITab) => void;
}) {
    const handleClick = () => {
        onClick(tab);
    };

    return (
        <li
            onClick={handleClick}
            className={`tab_item ${isActive ? "active" : ""}`}
        >
            <div>{tab.label}</div>
        </li>
    );
}

export default Tab;
