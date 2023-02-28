import React from 'react';
import '../Wrapper/Wrapper.css';
import Calculator from '../Calculator/Calculator';

function Wrapper() {


  return (
    <div className="wrapper flex">
      <div className="wrapper__row">
        <div className="wrapper__title">
          <h3>Make a loan calculation easily online</h3>
          <p>Need a loan for a home, a car or just for living? The loan calculator estimates the loan costs for a selected loan term.</p>
        </div>
        <div className="wrapper__container">
          <div className="wrapper__container--title">
          <h3>Calculate a suitable loan for you</h3>
          </div>
          <div className="wrapper__container--content">
            <Calculator/>
          </div>
         
          

        </div>
      </div>
    </div>
  )
}

export default Wrapper