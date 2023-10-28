import React, { useState } from 'react'
import Back from '../Components/Back';
import Modal from '../Components/Modal';
import ThemeSwitch from '../Components/ThemeSwitch';
import { useNavigate } from 'react-router-dom';

import Img0 from "../Assets/Images/0.jpg";
import Img1 from "../Assets/Images/1.jpg";
import Img2 from "../Assets/Images/2.jpg";
import Img3 from "../Assets/Images/3.jpg";
import Img4 from "../Assets/Images/4.jpg";
import Img5 from "../Assets/Images/5.jpg";

import { faArrowRightFromBracket, faChessBoard, faDiceFive, faEarthAmericas, faEnvelope, faInfo, faShieldHalved, faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Setting() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  // Modal
  const [isOpen, setIsOpen] = useState(false);

  // Window Link For Onclick Button
  const modal = () => setIsOpen(!isOpen);
  const support = () => window.location = "mailto:amirrahemi01@gmail.com";
  const x = () => window.location = "https://x.com/madeby_amir";
  const git = () => window.location = "https://github.com/amirrahemi01";
  const insagram = () => window.location = "https://instagram.com/amirrahemiii";
  const other = () => window.location = "https://amirrahemi01.github.io/Rock-Paper-Scissors-Game";
  const privacy = () => window.location = "PrivacyPolicy";
  const term = () => window.location = "TermOfService";
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
              <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)} >

                <div onClick={() => alert("Application is updating, comming soon")} >
                  <h2 style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>Boards</h2>
                  <div className="setting-boards">

                    <div className="columns-3">
                      <img src={Img0} />
                      <h4>Classic</h4>
                    </div>

                    <div className="columns-3">
                      <img src={Img1} />
                      <h4>traning</h4>
                    </div>

                    <div className="columns-3">
                      <img src={Img2} />
                      <h4>modern</h4>
                    </div>

                    <div className="columns-3">
                      <img src={Img3} />
                      <h4>versus</h4>
                    </div>

                    <div className="columns-3">
                      <img src={Img4} />
                      <h4>co-op</h4>
                    </div>

                    <div className="columns-3">
                      <img src={Img5} />
                      <h4>all-in-one</h4>
                    </div>

                  </div>
                </div>

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
                <option disabled value="pr">Persian</option>
                <option disabled value="en" selected>English</option>
                <option disabled value="sp">Spanish</option>
                <option disabled value="fr">French</option>
                <option disabled value="ne">Netherland</option>
                <option disabled value="po">Polish</option>
              </select>
              {/* <button className='main-btn setting-btn'>English - US</button> */}
              <FontAwesomeIcon icon={faEarthAmericas} />
            </div>
          </div>

          <div className="setting-item" onClick={() => alert('Star GitHub Repository')} >
            <p>Rate Game</p>
            <FontAwesomeIcon icon={faStar} />
          </div>

          <div className="setting-item" onClick={privacy}>
            <p>privacy policy</p>
            <FontAwesomeIcon icon={faShieldHalved} />
          </div>

          <div className="setting-item" onClick={term}>
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
