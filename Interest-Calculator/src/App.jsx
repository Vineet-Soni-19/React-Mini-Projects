import React, { useEffect, useState } from "react";
import "./App.css"

const App = () => {
  const [type, setType]=useState('SI')
  const [amount, setAmount] = useState(0);
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const handleCalculate = () => {
    let interest=0;
    if(type==='SI'){
      interest = (principal * rate * time) / 100;
    }
    else{
      interest=principal*Math.pow((1+rate/100),time)-principal;
    }
    setAmount(interest.toFixed(2));
  };
  const handleReset=()=>{
    setPrincipal('');
    setRate('');
    setTime('');
    setAmount(0);
  }
  useEffect(()=>{
    handleCalculate()
  },[type,principal,rate,time])
  return (
    <div className="parent">
      <div className="container">
        <h2>{type==='SI' ? 'Simple' : 'Compound'} Interest Calculator</h2>
        <div className="output">
          <p className="amount">
            ₹ {amount}
          </p>
          <p>Total {type==='SI' ? 'Simple' : 'Compound'} Interest</p>
        </div>
        <input
          type="text"
          id="principal"
          placeholder="₹ Principal Amount"
          value={principal}
          onChange={(e)=>setPrincipal(e.target.value)}
        />
        <input
          type="text"
          id="rate"
          placeholder="Rate of interest (p.a)%"
          value={rate}
          onChange={(e)=>setRate(e.target.value)}
        />
        <input
          type="text"
          id="time"
          placeholder="Time period ( Yr )"
          value={time}
          onChange={(e)=>setTime(e.target.value)}
        />
        <div className="btn">
          {/* <button onClick={handleCalculate}>Calculate</button> */}
          <button onClick={handleReset}>Reset</button>
          <button onClick={()=> setType(type==='SI' ? 'CI' : "SI")}>{type}</button>
        </div>
      </div>
    </div>
  );
};

export default App;
