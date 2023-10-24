import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Setting() {
  return (
    <div className='setting-container'>
      <div className='blur' style={{ height: "100vh"}}>
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  )
}
