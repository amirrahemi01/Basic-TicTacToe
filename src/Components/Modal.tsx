import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: Props) {
    if (!open) return null;

    return (
      <div className="modal-container" onClick={onClose} >
      <div className="modal-inner" onClick={e => e.stopPropagation()} >
          <FontAwesomeIcon
              onClick={onClose}
              icon={faSquareXmark}
              className="close-btn"
              size="xl"
          />
          {children}
      </div>
        </div>
      );
    };