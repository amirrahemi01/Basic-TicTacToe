import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <div className='child-container'>
        <div className='child-left'>
          <div style={{ textTransform: "uppercase" }}>
            <h1 style={{ letterSpacing: "30px" }}>Lets Play The</h1>
            <h1 style={{ letterSpacing: "22px" }}>TICTACTOE</h1>
          </div>
          <p>
            Tic Tac Toe, also known as
            "noughts and crosses," is
            a two-player game typically
            played on a 3x3 grid. The
            objective of the game is
            to be the first to form
            a line of three of your
            symbols (either "X" or "O")
            horizontally, vertically,
            or diagonally on the grid.
            Players take turns placing
            their symbol in an empty
            space on the grid. The game
            ends when one player achieves
            a winning combination or when
            the grid is completely filled,
            resulting in a draw.a
          </p>
        </div>
        <div className='child-right'>
          <Link to="Game" className="link">Play Game</Link> <br />
          <Link className="link">Setting</Link> <br />
          <Link className="link">Share</Link> <br />
        </div>
      </div>
    </div>
  )
}