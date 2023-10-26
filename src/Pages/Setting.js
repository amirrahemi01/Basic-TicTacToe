import { faArrowRightFromBracket, faChessBoard, faDiceFive, faEnvelope, faGear, faInfo, faLanguage, faPhone, faQuestion, faShieldHalved, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Back from '../Components/Back';
import ThemeSwitch from '../Components/ThemeSwitch';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Setting() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className='setting-container'>
      <div className='blur' style={{ height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div className='setting-box'>
          <Back onBackClick={goBack} gameTitle="Setting" setting={true} x="yes" />

          <div className="setting-item"><p>Dark Mode</p> <ThemeSwitch /></div>
          <div className="setting-item">
            <p>Board</p>
            <div>
              <button className='main-btn setting-btn'>Choose Your Board</button>
              <FontAwesomeIcon icon={faChessBoard} />
              {/* Classic - traing - modern - versus - co-op -  */}
            </div>
          </div>

          <div className="setting-item">
            <p>Support</p>
            <div>
              <button className='main-btn setting-btn'>Contact Us</button>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>

          <div className="setting-item">
            <p>Language</p>
            <div>
              <button className='main-btn setting-btn'>English - US</button>
              <FontAwesomeIcon icon={faLanguage} />
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

          <div className="setting-item">
            <p>Twitter(x)</p>
            <FontAwesomeIcon icon={faTwitter} />
          </div>

          <div className="setting-item">
            <p>Instagram</p>
            <FontAwesomeIcon icon={faInstagram} />
          </div>

          <div className="setting-item">
            <p>GitHub</p>
            <FontAwesomeIcon icon={faGithub} />
          </div>

          <hr />
          <div className="setting-item">
            <p>Other Games</p>
            <FontAwesomeIcon icon={faDiceFive} />
          </div>

          <div className="setting-item">
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
