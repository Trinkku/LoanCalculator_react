import React, { useState } from 'react'
import './Calculator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCar } from '@fortawesome/free-solid-svg-icons'


export default function Calculator() {

  const [selectedLoan, setSelectedLoan] = useState('house')

  const handleHouseClick = () => {
    setSelectedLoan('house')
    console.log("clicked house")
  }

  return (
    <div className="calculator__container">
        <div className="calculator__wrapper">
                <button 
                className={`calculator__box ${selectedLoan === 'house'  ? 'calculator__box--selected' : ''}`} 
                onClick={handleHouseClick}>
                    <FontAwesomeIcon icon={faHouse} className="calculator__box--icon"/>
                    <h2>Home</h2>
                    <p>Owner–occupied flat, house</p>
                </button>
                <div className="calculator__box">
                    <FontAwesomeIcon icon={faCar} className="calculator__box--icon"/>
                    <h2>Home</h2>
                    <p>Car, motorbike, boat</p>
                </div>
         
        </div>
    </div>
  )
}
