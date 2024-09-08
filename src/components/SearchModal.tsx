import React, { useEffect, useRef } from "react";
import Modal from "./Modal";

interface SearchModalProps {
    searchKeyword: string;
    isModalOpen: boolean;
    onClose: () => void;
    onChangeSearchKeyword: (value: string) => void;
}

function SearchModal({
    searchKeyword,
    isModalOpen,
    onClose,
    onChangeSearchKeyword,
}: SearchModalProps) {
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const handleChangeSearchKeyword = (e: any) => {
        onChangeSearchKeyword(e.target.value);
    };

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            onClose();
        }
    };

    useEffect(() => {
        if (isModalOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isModalOpen]);

    return (
        <Modal isModalOpen={isModalOpen} onClose={onClose}>
            <h2>Search Portfolio</h2>
            <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                value={searchKeyword}
                onChange={handleChangeSearchKeyword}
                onKeyDown={handleKeyDown}
            />
            <button onClick={onClose}>버튼</button>
        </Modal>
    );
}

export default SearchModal;
