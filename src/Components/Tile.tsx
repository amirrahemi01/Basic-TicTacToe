import React from 'react';

type Props = {
    className : string;
    value: string | null;
    onClick: () => void;
    userTurn: string | null;
}

const Tile = ({className, value, onClick, userTurn}: Props) => {
  const hoverClass = value === null && userTurn !== null ? `${userTurn.toLowerCase()}-hover` : '';

  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
        {value}
    </div>
  );
};

export default Tile