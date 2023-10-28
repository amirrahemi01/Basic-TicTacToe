import React from 'react';
import Tile from "./Tile";
import Strike from "./Strike";

type Props = {
    tiles: (string | null)[];
    onTileClick: (index: number) => void;
    userTurn: string;
    strikeClass: string | null;
}

export default function Board({ tiles, onTileClick, userTurn, strikeClass }: Props) {
    const renderTile = (index: number, classNames: string) => (
        <Tile
            userTurn={userTurn}
            onClick={() => onTileClick(index)}
            value={tiles[index]}
            className={classNames}
        />
    );

  return (
    <div className="board-item">
      {renderTile(0, 'right-border bottom-border')}
      {renderTile(1, 'right-border bottom-border')}
      {renderTile(2, 'bottom-border')}
      {renderTile(3, 'right-border bottom-border')}
      {renderTile(4, 'right-border bottom-border')}
      {renderTile(5, 'bottom-border')}
      {renderTile(6, 'right-border')}
      {renderTile(7, 'right-border')}
      {renderTile(8, 'a')}
      <Strike strikeClass={strikeClass} />
    </div>
  );
}
