import { faArrowRightFromBracket, faChessBoard, faDiceFive, faEarthAmericas, faEnvelope, faGear, faInfo, faLanguage, faPhone, faQuestion, faShieldHalved, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Back from '../Components/Back';
import ThemeSwitch from '../Components/ThemeSwitch';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Modal from '../Components/Modal';

export default function Setting() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const modal = () => setIsOpen(!isOpen);
  const support = () => window.location = "mailto:amirrahemi01@gmail.com";
  const x = () => window.location = "https://x.com/madeby_amir";
  const git = () => window.location = "https://github.com/amirrahemi01";
  const insagram = () => window.location = "https://instagram.com/amirrahemiii";
  const other = () => window.location = "https://amirrahemi01.github.io/Rock-Paper-Scissors-Game";
  const exit = () => window.location = "/";



  return (
    <div className='setting-container'>
      <div className='blur setting-display'>
        <div className='setting-box'>
          <Back onBackClick={goBack} gameTitle="Setting" setting={true} x="yes" />

          <div className="setting-item"><p>Dark Mode</p><ThemeSwitch /></div>

          <div className="setting-item">
            <p onClick={modal}>Board</p>
            <div onClick={modal}>
              <button className='main-btn setting-btn'>Choose Your Board</button>
              <FontAwesomeIcon icon={faChessBoard} />
              {/* Classic - traing - modern - versus - co-op -  */}


              <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)} >
                <>
                  <FontAwesomeIcon icon={faChessBoard} />
                  <FontAwesomeIcon icon={faEnvelope} />
                  <FontAwesomeIcon icon={faShieldHalved} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faLanguage} />
                  <FontAwesomeIcon icon={faInfo} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faGithub} />
                  <FontAwesomeIcon icon={faDiceFive} />
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </>
              </Modal>



            </div>
          </div>

          <div className="setting-item">
            <p onClick={support}>Support</p>
            <div onClick={support}>
              <button className='main-btn setting-btn'>Contact Us</button>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>

          <div className="setting-item">
            <p>Language</p>
            <div className="flx">
            <select name="language" id="language-select">
              <option value="">choose language--</option>
              <option value="en" selected>English</option>
              <option value="pr">Persian</option>
              <option value="sp">Spanish</option>
              <option value="fr">French</option>
              <option value="ne">Netherland</option>
              <option value="po">Polish</option>
            </select>
              {/* <button className='main-btn setting-btn'>English - US</button> */}
              <FontAwesomeIcon icon={faEarthAmericas} />
            </div>
          </div>

          <div className="setting-item">
            <p>Rate Game</p>
            <FontAwesomeIcon icon={faStar} />
          </div>

          <div className="setting-item">
            <p>privacy policy</p>
            <FontAwesomeIcon icon={faShieldHalved} />
          </div>

          <div className="setting-item">
            <p>terms of service</p>
            <FontAwesomeIcon icon={faInfo} />
          </div>

          <hr />
          <h3>Social Media</h3>

          <div className="setting-item" onClick={x}>
            <p>Twitter(x)</p>
            <FontAwesomeIcon icon={faTwitter} />
          </div>

          <div className="setting-item" onClick={insagram}>
            <p>Instagram</p>
            <FontAwesomeIcon icon={faInstagram} />
          </div>

          <div className="setting-item" onClick={git}>
            <p>GitHub</p>
            <FontAwesomeIcon icon={faGithub} />
          </div>

          <hr />
          <div className="setting-item" onClick={other}>
            <p>Other Games</p>
            <FontAwesomeIcon icon={faDiceFive} />
          </div>

          <div className="setting-item" onClick={exit}>
            <p>Exit Game</p>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </div>

          <hr />
          <main className="setting-footer">
            <p>TicTacToe - developed by <b>Amir Rahemi</b></p>
            <code>V 1.0.0</code>
          </main>

        </div>
      </div>
    </div>
  )
}
