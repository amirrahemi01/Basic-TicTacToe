import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TicTacToe from '../Components/TicTacToe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faGamepad, faGear, faRobot } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Components/Modal';

export default function Game() {

  // Modal
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const [isMultiplayer, setMultiplayer] = useState(false);

  return (
    <div className="main-background" >
      <div className="game-container blur" style={{ height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

        {!isMultiplayer ? (<>
          <h2 style={{ letterSpacing: "30px" }}>Select Game Type</h2>
          <Link className="link" onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon={faRobot} />AI BOT </Link><br />
          <Link className="link" onClick={() => { setMultiplayer(!isMultiplayer); }}>
            <FontAwesomeIcon icon={faGamepad} />
            Multiplayer
          </Link>

          <Modal open={isOpen} onClose={() => setIsOpen(false)} >
            <b>AI BOT is currently not active. Coming Soon</b>
          </Modal>
        </>) : ""}

        <br />

        {isMultiplayer ? (<>
          <div className="game-status" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faAngleLeft} onClick={goBack} />
            <p onClick={goBack}>Back Home</p>
            <h2 style={{margin: "0 6rem", opacity: "0"}}>TicTacToe</h2>
            <Link to="/Setting">
              <FontAwesomeIcon icon={faGear} />
            </Link>
          </div>
          <TicTacToe />
        </>) : ""}


      </div>
    </div>
  )
}
