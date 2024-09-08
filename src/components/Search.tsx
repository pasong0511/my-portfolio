import React from "react";

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
                <img src="/theme/portfolio/img/search.svg" alt="search" />
            </button>
        </div>
    );
}

export default Search;
