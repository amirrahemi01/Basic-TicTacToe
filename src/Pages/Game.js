import React, { useState } from 'react'
import TicTacToe from '../Components/TicTacToe'
import Modal from '../Components/Modal';
import Back from '../Components/Back';

import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faRobot } from '@fortawesome/free-solid-svg-icons';

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

        <div className="game-box">
          {!isMultiplayer ? (<>
            <h2 className='title'>Select Game Type</h2>

            <Back onBackClick={goBack} gameTitle="TicTacToe" setting={false} />

            <Link className="main-btn" onClick={() => setIsOpen(true)}>
              <FontAwesomeIcon icon={faRobot} />AI BOT </Link><br />
            <Link className="main-btn" onClick={() => { setMultiplayer(!isMultiplayer); }}>
              <FontAwesomeIcon icon={faGamepad} />
              Multiplayer
            </Link>

            <Modal open={isOpen} onClose={() => setIsOpen(false)} >
              <b>AI BOT currently is not active. Coming Soon</b>
            </Modal>
          </>) : ""}

          <br />

          {isMultiplayer ? (<>
            <Back onBackClick={() => { setMultiplayer(!isMultiplayer); }} gameTitle="TicTacToe" setting={false} x="yes" />
            <TicTacToe />
          </>) : ""}

        </div>

      </div>
    </div>
  )
}
