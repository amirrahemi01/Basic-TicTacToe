import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TicTacToe from '../Components/TicTacToe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faGamepad, faGear, faL, faRobot } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Components/Modal';
import Back from '../Components/Back';

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

          <Back onBackClick={goBack}  gameTitle="TicTacToe" setting={false} />
          
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
          <Back onBackClick={() => { setMultiplayer(!isMultiplayer); }}  gameTitle="TicTacToe" setting={false} x="yes" />
          <TicTacToe />
        </>) : ""}


      </div>
    </div>
  )
}
