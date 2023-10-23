
import React from 'react';

type Props = {
  strikeClass: any;
}

function Strike({strikeClass}: Props) {
  return (
    <div className={`strike ${strikeClass}`}></div>
  )
}

export default Strike