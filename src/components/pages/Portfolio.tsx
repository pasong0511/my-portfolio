import React, { useState, useMemo } from "react";

import Tab, { ITab } from "../section/Tab";
import CardList from "../ui/CardList";

import Search from "../ui/Search";
import SearchModal from "../ui/SearchModal";

import postData from "../../data/postData.json";
import tabData from "../../data/tabData.json";
import { PostData } from "../../types/post";

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
        }) as PostData;
    }, [activeTab, searchKeyword]);

    return (
        <>
            <article className="page-title-section">
                <h2>Portfolio Page</h2>
            </article>
            <article>
                <Tab
                    tabData={tabData}
                    activeTab={activeTab}
                    setActiveTab={handleActiveTab}
                />
            </article>
            <article className="search-section">
                <Search setIsModalOpen={setIsModalOpen} />
                <SearchModal
                    searchKeyword={searchKeyword}
                    isModalOpen={isModalOpen}
                    onClose={handleClose}
                    onChangeSearchKeyword={onChangeSearchKeyword}
                />
            </article>
            <article className="card-section">
                <CardList filteredItems={filteredItems} />
            </article>
        </>
    );
}

export default Portfolio;
