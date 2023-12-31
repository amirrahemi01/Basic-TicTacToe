import React, { useState } from 'react'
import Modal from '../Components/Modal';
import { Link } from 'react-router-dom';

import { faArrowUpFromBracket, faGear, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {

  // Modal
  const [isOpen, setIsOpen] = useState(false);


  // Copy & Paste In Clipboard
  const [copied, setCopied] = useState(false);

  function copyUrl() {
    const element = document.createElement("input");
    element.value = window.location.href;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    setCopied(true);
  }

  return (
    <div className="home-container main-background">
      <div className='child-container'>
        <div className='child-left'>
          <div style={{ textTransform: "uppercase" }}>
            <h1>Lets Play The</h1>
            <h1>TICTACTOE</h1>
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
            resulting in a draw.
          </p>
        </div>

        <div className='child-right' >
          <Link to="Game" className="link" >
            <FontAwesomeIcon icon={faPlay} /> Play Game
          </Link>
          <Link to="Setting" className="link"> <FontAwesomeIcon icon={faGear} /> Setting</Link>
          <Link className="link" onClick={() => { copyUrl(); setIsOpen(true); }}>
            <FontAwesomeIcon icon={faArrowUpFromBracket} /> Share
          </Link>

          <div>
            {!copied ? "" : 
            <>
              <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)} >
                <b>Copied to clipboard! Share it now :)</b>
              </Modal>
            </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}