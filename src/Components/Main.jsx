import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Main() {
  const [amount,setAmount]=useState("");
  const[tenure,setTenure]=useState("");
  const [rate, setRate] = useState("");

  const[interest,setInterest]=useState(0);
  console.log(amount,tenure,rate);
  const handleCalculator=()=>{
    const loanAmount = parseFloat(amount); 
    const loanTenure = parseInt(tenure);
    const interestRate = parseFloat(rate) / 12 / 100; 
  
    // calculate EMI formula
    const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTenure)) /
    (Math.pow(1 + interestRate, loanTenure) - 1);
    setInterest(emi.toFixed(2));
  }

  return (
    <div>
      <div className="row ms-4 mt-3">
        <h3>Car Loan EMI Calculator</h3>
        <p>Calculate the car loan EMI by using BankBazaar’s Car Loan EMI Calculator. You will need to enter the loan amount, tenure, interest rate, and click on ‘Calculate’ to check the EMIs.</p>
      </div>
      <div className="row" style={{ backgroundColor: '#3dbfd9' }}>
        <form>
          <ul type='none' className=' p-5 text-center'>
            <li>Loan Amount </li>
            <TextField className='bg-light rounded' id="outlined-basic" variant="outlined" onChange={(e)=>setAmount(e.target.value)} />
            <li className='mt-3'>Tenure </li>
            <TextField className='bg-light rounded' id="outlined-basic" variant="outlined" onChange={(e)=>setTenure(e.target.value)} />
            <li className='mt-3'>Interest Rate in % </li>
            <TextField className='bg-light rounded' id="outlined-basic" variant="outlined" onChange={(e)=>setRate(e.target.value)} />
            <div className="text-center mt-5 ">
              <Button className='bg-danger' variant="contained" onClick={e => handleCalculator(e)}>Calculate</Button>
            </div>

          </ul>

        </form>
        <div className="text-center text-light">
        <h2>Your Monthly Loan EMI: &#8377;{interest}</h2>
        </div>

      </div>
    </div>
  )
}

export default Main