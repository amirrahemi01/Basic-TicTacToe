import React from 'react'
import { Link } from 'react-router-dom'
import TicTacToe from '../Components/TicTacToe'

export default function Game() {
  return (
    <div className="App">
      <TicTacToe />
      <Link to="/" className="link">Home</Link> <br />
    </div>
  )
}
