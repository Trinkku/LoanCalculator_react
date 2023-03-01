import React, { useState } from 'react'

const CarLoanCalculator = () => {
  const [principal, setPrincipal] = useState('20 000');
  const [interestRate, setInterestRate] = useState('4.5');
  const [loanTerm, setLoanTerm] = useState('48');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const handleCalculate = () => {
    const P = parseFloat(principal.replace(/[^\d.-]/g, ''));
    const r = parseFloat(interestRate) / 1200; // Monthly interest rate
    const n = parseFloat(loanTerm); // Loan term in months
    const monthlyPayment = ((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)).toFixed(2);
    setMonthlyPayment(monthlyPayment);
  };

  const handlePrincipalChange = (e) => {
    // add space after every three digits
    const formattedValue = e.target.value.replace(/[^\d.-]/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    setPrincipal(formattedValue);
  };

  return (
    <div className='carloan__container'>
      <form className='form__container'>
        <div>
          <label>How much you need to borrow?</label>
          <div className='input__container'>
            <input type='text' id='number' step='1000' value={principal} onChange={handlePrincipalChange} />
          </div>
        </div>
        <div>
          <label>Loan term in months</label>
          <div className='input__container'>
            <input type='number' step='1' value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
          </div>
        </div>
        <div>
          <label>Interest rate %:</label>
          <div className='input__container'>
            <input type='number' step='0.01' value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
          </div>
        </div>
        <div className='result'>
          <button className='calculate__button' type='button' onClick={handleCalculate}>
            Calculate
          </button>
        </div>
      </form>
      <div className='result__container'>
        {monthlyPayment && (
          <div className='price'>
            <p>Monthly Payment:</p>
            <p>{monthlyPayment} €</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarLoanCalculator;
