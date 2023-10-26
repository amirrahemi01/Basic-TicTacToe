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
        <Back onBackClick={goBack}  gameTitle="Setting" setting={true} x="yes" />
          <p>Theme:</p> <ThemeSwitch />
          <p>Board:</p>
        </div>
      </div>
    </div>
  )
}
