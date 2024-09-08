import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Tab, { ITab } from "./Tab";
import CardList from "./CardList";
import { portfolioDatas, tabDatas } from "../data/data";
import Search from "./Search";
import SearchModal from "./SearchModal";

function Portfolio() {
    const [activeTab, setActiveTab] = useState<ITab>(tabDatas[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState<string>("");

    const handleActiveTab = (tab: ITab) => {
        setActiveTab(tab);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const onChangeSearchKeyword = (value: string) => {
        console.log(value);
        setSearchKeyword(value);
    };

    //검색 데이터 필터링
    const filteredItems = useMemo(() => {
        return portfolioDatas.filter((item) => {
            const matchesTab =
                activeTab.kategorie === "all" ||
                item.kategorie === activeTab.kategorie;
            const matchesSearch =
                searchKeyword === "" ||
                item.title.toLowerCase().includes(searchKeyword.toLowerCase());
            return matchesTab && matchesSearch;
        });
    }, [activeTab, searchKeyword]);

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
            <SearchModal
                searchKeyword={searchKeyword}
                isModalOpen={isModalOpen}
                onClose={handleClose}
                onChangeSearchKeyword={onChangeSearchKeyword}
            />
        </div>
    );
}

export default Portfolio;
