import React, { useState, useMemo } from "react";

import Tab, { ITab } from "../section/Tab";
import CardList from "../ui/CardList";

import Search from "../ui/Search";
import SearchModal from "../ui/SearchModal";

import postData from "../../data/postData.json";
import tabData from "../../data/tabData.json";

function Portfolio() {
    const [activeTab, setActiveTab] = useState<ITab>(tabData[0]);
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
        return postData.filter((item) => {
            const matchesTab =
                activeTab.value === "전체" ||
                item.kategorie.includes(activeTab.value);
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
                tabData={tabData}
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
