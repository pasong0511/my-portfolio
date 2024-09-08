import React from "react";
import Modal from "./Modal";

function SearchModal({
    isModalOpen,
    onClose,
}: {
    isModalOpen: boolean;
    onClose: () => void;
}) {
    return (
        <Modal isModalOpen={isModalOpen} onClose={onClose}>
            <h2>Search Portfolio</h2>
            <input type="text" placeholder="Search..." />
        </Modal>
    );
}

export default SearchModal;
