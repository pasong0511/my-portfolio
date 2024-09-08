import React from "react";
import Modal from "./Modal";

function SearchModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Search Portfolio</h2>
            <input type="text" placeholder="Search..." />
        </Modal>
    );
}

export default SearchModal;
