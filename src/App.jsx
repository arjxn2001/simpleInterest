import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  //state to hold values from input field
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] =useState(0)
  const [interest ,setInterest] = useState(0)

  // for conditional rendering
  const [isPrinciple , setIsPrinciple] =useState(true)
  const [isRate, setIsRate]= useState(true)
  const [isYear, setIsYear] = useState(true)


  const validate = (e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name);
    let name = e.target.name
    let value = e.target.value
    console.log(!!value.match(/^[0-9]*$/));

   if(!!value.match(/^[0-9]*$/)){
    if(name =='principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }
  else{
    if(name =='principle'){
       setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name=='rate'){
       setRate(value)
      setIsRate(false)
    }
    else{
       setYear(value)
      setIsYear(false)
    }
  }
   }

   const handleReset =()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
   }

   const calculate =()=>{
       setInterest((principle*rate*year)/100)
   }

  // console.log('principle',principle);
  // console.log('rate',rate);
  // console.log('year',year);

  return (
    <>

    <div className="row ">
      <div className="col-md-4"></div>
      <div className="col-md-4 border  bg-light rounded mt-2">
      <div className='mt-2 p-2'>
        <h1 className='text-center'>Simple Interest App</h1>
        <p className='text-center'>Calculate your simple interest Easily.</p>
        <div className='card w-100 text-center py-4 bg-warning shadow' >
          <h2 className='fw-bolder'>₹ {interest}</h2>
          <p>Today simple interest</p>
        </div>
        <div className='mt-3'>
          <div>
          <TextField className='w-100' id="outlined-basic"  label="₹ Principal amount" name='principle' onChange={(e)=>validate(e)} variant="outlined"  value={principle || ""}/>
        {!isPrinciple &&
        <p className='text-danger'>*Invalid Input</p>}
          </div>

        <div>
        <TextField className='w-100 mt-2' id="outlined-basic"  label="Rate of Interest (p.a)%" name='rate' variant="outlined"  onChange={(e)=>validate(e)}  value={rate || ""}/>
        {!isRate &&
        <p className='text-danger'>*Invalid Input</p>}
        </div>
        
        <div>
        <TextField className='w-100 mt-2' id="outlined-basic"  label="Year (Yr)" variant="outlined" name='year'  onChange={(e)=>validate(e)}  value={year || ""}/>
        {!isYear &&
        <p className='text-danger'>*Invalid Input</p>}
        </div>
        </div>
        
        
        <div className='d-flex justify-content-between mt-3 mb-4'>
        <Button variant="contained" color="success" className='me-3' style={{width:'190px', height:'60px'}} disabled={isPrinciple && isRate && isYear ?false:true} onClick={calculate}>Calculate</Button>
      <Button variant="outlined" style={{width:'190px', height:'60px'}} onClick={handleReset} >Reset</Button>
        </div>
      </div>

      </div>
      <div className="col-md-4"></div>
    </div>
      

    </>
  )
}

export default App
