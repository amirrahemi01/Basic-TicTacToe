
import React from 'react';

type Props = {
  strikeClass: string;
}

function Strike({strikeClass}: Props) {
  return (
    <div className={`strike ${strikeClass}`}></div>
  )
}

export default Strike