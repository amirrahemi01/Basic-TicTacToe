import { faAngleLeft, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Back from '../Components/Back';
import ThemeSwitch from '../Components/ThemeSwitch';

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
            <button className='main-btn setting-btn'>Choose Your Board</button>
            {/* Classic - traing - modern - versus - co-op -  */}
          </div>

          <div className="setting-item">
            <p>Support</p>
            <button className='main-btn setting-btn'>Contact Us</button>
          </div>

          <div className="setting-item">
            <p>Language</p>
            <button className='main-btn setting-btn'>English - US</button>
          </div>

          <div className="setting-item">
            <p>Rate Game</p>
            <button className='main-btn setting-btn'>Star</button>
          </div>

          <div className="setting-item">
            <p>privacy policy</p>
            <button className='main-btn setting-btn'>Star</button>
          </div>

          <div className="setting-item">
            <p>terms of service</p>
            <button className='main-btn setting-btn'>Star</button>
          </div>

          <hr /> 
          <h3>Social Media</h3>

          <div className="setting-item">
            <p>Twitter(x)</p>
            <button className='main-btn setting-btn'>Star</button>
          </div>

          <div className="setting-item">
            <p>Instagram</p>
            <button className='main-btn setting-btn'>Star</button>
          </div>

          <div className="setting-item">
            <p>GitHub</p>
            <button className='main-btn setting-btn'>Star</button>
          </div>

          <hr />
          <div className="setting-item">
            <p>Other Games</p>
            <button className='main-btn setting-btn'>Star</button>
          </div>

          <div className="setting-item">
            <p>Exit Game</p>
            <button className='main-btn setting-btn'>Star</button>
          </div>

          <p>TicTacToe - developed by <b>Amir Rahemi</b></p>
          <code>V 1.0.0</code>

        </div>
      </div>
    </div>
  )
}
