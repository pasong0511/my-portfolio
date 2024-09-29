import React from "react";

import { IoSearch } from "react-icons/io5";

interface SearchProps {
    setIsModalOpen: (modalState: boolean) => void;
}

function Search({ setIsModalOpen }: SearchProps) {
    const handleClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="search">
            <button onClick={handleClick}>
                <IoSearch />
            </button>
        </div>
    );
}

export default Search;
