import { faAngleLeft, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

type Props = {
    onBackClick: () => void,
    gameTitle: any,
    setting: any,
    hide: any,
    x: any
}

export default function Back({ onBackClick, gameTitle, setting, hide, x }: Props) {

    const [isSetting, setIsSetting] = useState(setting);

    if (x === 'yes') {
        hide =  1;
    } else {
        hide =  0;
    }

    return (
        <div className="game-status" style={{ cursor: "pointer" }}>

            <FontAwesomeIcon icon={faAngleLeft} onClick={onBackClick} />
            <p onClick={onBackClick}>Back</p>

            <h2 style={{ margin: "0 6rem", opacity: `${hide}` }}>{gameTitle}</h2>

            {isSetting ? "" :
                <Link to="/Setting">
                    <FontAwesomeIcon icon={faGear} />
                </Link>}
        </div>
    )
}