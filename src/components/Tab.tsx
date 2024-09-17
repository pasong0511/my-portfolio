import React, { useState } from "react";

export interface ITabProps {
    tabData: ITab[];
    activeTab?: ITab;
    setActiveTab: any;
}

export interface ITab {
    label: string;
    value: string;
}

function Tab({ tabData, activeTab, setActiveTab }: ITabProps) {
    const handleClick = (tab: ITab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <nav>
                <ul className="menu_tab">
                    {tabData.map((tab) => (
                        <TabItem
                            key={tab.value}
                            tab={tab}
                            isActive={activeTab?.value === tab.value}
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
