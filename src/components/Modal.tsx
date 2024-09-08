import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

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
