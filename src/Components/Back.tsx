import React from 'react';
import { Link } from 'react-router-dom';

import { faAngleLeft, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    onBackClick: () => void,
    gameTitle: string;
    setting: boolean;
    hide: any;
    x: "yes" | "no";
}

export default function Back({ onBackClick, gameTitle, setting, x }: Props) {
    const hide = x === "yes" ? 1 : 0;

    return (
        <div className="game-status" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faAngleLeft} onClick={onBackClick} />
            <p onClick={onBackClick}>Back</p>
            <h2 style={{ margin: "0 6rem", opacity: `${hide}` }}>{gameTitle}</h2>

            {!setting && (
                <Link to="/Setting">
                    <FontAwesomeIcon icon={faGear} />
                </Link>
            )}
        </div>
    )
}