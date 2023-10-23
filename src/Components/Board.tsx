import Strike from "./Strike";
import Tile from "./Tile";

import React from 'react';

type Props = {
    tiles: (string | null)[];
    onTileClick: (index: number) => void;
    userTurn: string;
    strikeClass: string | null;
}

const Board = ({ tiles, onTileClick, userTurn, strikeClass }: Props) => {
    return (
        <div className="board-item">
            {/* <Tile userTurn={userTurn} className="right-border bottom-border" value={tiles[0]} onClick={() => onTileClick(0)} />
            <Tile userTurn={userTurn} className="right-border bottom-border" value={tiles[1]} onClick={() => onTileClick(1)} />
            <Tile userTurn={userTurn} className="bottom-border" value={tiles[2]} onClick={() => onTileClick(2)} />
            <Tile userTurn={userTurn} className="right-border bottom-border" value={tiles[3]} onClick={() => onTileClick(3)} />
            <Tile userTurn={userTurn} className="right-border bottom-border" value={tiles[4]} onClick={() => onTileClick(4)} />
            <Tile userTurn={userTurn} className="bottom-border" value={tiles[5]} onClick={() => onTileClick(1)} />
            <Tile userTurn={userTurn} className="right-border" value={tiles[6]} onClick={() => onTileClick(6)} />
            <Tile userTurn={userTurn} className="right-border" value={tiles[7]} onClick={() => onTileClick(7)} />
            <Tile userTurn={userTurn} className="" value={tiles[8]} onClick={() => onTileClick(8)} />
            <Strike strikeClass={strikeClass} />

            <div className="board"> */}
            <Tile
                userTurn={userTurn}
                onClick={() => onTileClick(0)}
                value={tiles[0]}
                className="right-border bottom-border"
            />
            <Tile
                userTurn={userTurn}
                onClick={() => onTileClick(1)}
                value={tiles[1]}
                className="right-border bottom-border"
            />
            <Tile
                userTurn={userTurn}
                onClick={() => onTileClick(2)}
                value={tiles[2]}
                className=" bottom-border"
            />
            <Tile
                userTurn={userTurn}
                onClick={() => onTileClick(3)}
                value={tiles[3]}
                className="right-border bottom-border"
            />
            <Tile
                userTurn={userTurn}
                onClick={() => onTileClick(4)}
                value={tiles[4]}
                className="right-border bottom-border"
            />
            <Tile
                userTurn={userTurn}
                onClick={() => onTileClick(5)}
                value={tiles[5]}
                className="bottom-border"
            />
            <Tile
                userTurn={userTurn}
                onClick={() => onTileClick(6)}
                value={tiles[6]}
                className="right-border"
            />
            <Tile
                userTurn={userTurn}
                onClick={() => onTileClick(7)}
                value={tiles[7]}
                className="right-border"
            />
            <Tile
                userTurn={userTurn}
                onClick={() => onTileClick(8)}
                value={tiles[8]} className="a" />
            <Strike strikeClass={strikeClass} />
        </div>
        // </div>
    )
}

export default Board