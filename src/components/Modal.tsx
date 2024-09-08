import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    isModalOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function Modal({ isModalOpen, onClose, children }: ModalProps) {
    useEffect(() => {
        const handleESCClose = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleESCClose);

        return () => document.addEventListener("keydown", handleESCClose);
    }, [onClose]);

    if (!isModalOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal" onClick={onClose}>
            <div className="modal_wrapper" onClick={(e) => e.stopPropagation()}>
                <button className="modal_close" onClick={onClose}>
                    x
                </button>

                <div>{children}</div>
            </div>
        </div>,
        document.body
    );
}

export default Modal;
