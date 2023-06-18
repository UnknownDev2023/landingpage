import React, { useState } from 'react';

const ConversionCalculator = () => {
  const [inputPrice, setInputPrice] = useState('');
  const [convertedPrice, setConvertedPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const price = event.target.value;
    setInputPrice(price);

    // Predefined calculation
    const conversionRate = 50; // Modify this with your desired calculation
    const converted = price * conversionRate;

    // Round the converted price to 2 decimal places
    const roundedConverted = parseFloat(converted).toFixed(2);

    setConvertedPrice(roundedConverted);

    if (price < 10) {
      setErrorMessage('The minimum purchase price in BUSD is 10!');
    } else {
      setErrorMessage('');
    }
  };

  const handleConvertedChange = (event) => {
    const price = event.target.value;
    setConvertedPrice(price);

    // Reverse calculation
    const conversionRate = 50; // Modify this with your desired calculation
    const input = price / conversionRate;

    // Round the input price to 2 decimal places
    const roundedInput = parseFloat(input).toFixed(2);

    setInputPrice(roundedInput);
    if (price < 500) {
        setErrorMessage('The minimum purchase price in BUSD is 10!');
      } else {
        setErrorMessage('');
      }
  };

  return (
    <div>
        <div style={{width:"100%", paddingLeft:"30px", paddingRight:"30px"}}>
        <p style={{paddingLeft:"0px",float:"left", fontSize:"14px"}}>Amount in <b>BUSD</b> you pay</p>
        <input
        type="field"
        className='inputstyle1'
        id="inputPrice"
        placeholder="Enter price"
        value={inputPrice}
        onChange={handleInputChange}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>

      <div style={{height:"20px", width: "100%", clear:"both"}}></div>
      <div style={{width:"100%", paddingLeft:"30px", paddingRight:"30px"}}>
      <p style={{paddingLeft:"0px",float:"left", fontSize:"14px"}}>Amount in <b>COSMIC</b> you receive</p>
      <input
        type="field"
        id="convertedPrice"
        className='inputstyle1'
        placeholder="Enter converted price"
        value={convertedPrice}
        onChange={handleConvertedChange}
      />
      </div>
      
    </div>
  );
};

export default ConversionCalculator;