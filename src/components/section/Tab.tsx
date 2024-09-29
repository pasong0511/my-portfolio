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
        <ul className="tab">
            {tabData.map((tab) => (
                <TabItem
                    key={tab.value}
                    tab={tab}
                    isActive={activeTab?.value === tab.value}
                    onClick={handleClick}
                />
            ))}
        </ul>
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
            className={`tab-item ${isActive ? "active" : ""}`}
        >
            <span>{tab.label}</span>
        </li>
    );
}

export default Tab;
