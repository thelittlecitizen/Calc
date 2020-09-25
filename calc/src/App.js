import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [currentSum,setCurrentSum]=useState(0);//initialize 0 storing the current value's sum
  const [clear,setClear]=useState(false);//initialize clear screen

  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Add=(e)=>{
    e.preventDefault(); 
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum==='')
    return;
    let sum= currentSum+parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const Sub=(e)=>{
    e.preventDefault(); 
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum==='')
    return;
    let sub= currentSum-parseInt(currentNum);
    setCurrentSum(sub);
    document.querySelector('#num').value="";
      
  }

  const MUlt=(e)=>{
    e.preventDefault(); 
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum==='')
    return;
    let mult= currentSum*parseInt(currentNum);
    setCurrentSum(mult);
    document.querySelector('#num').value="";
      
  }

  const Div=(e)=>{
    e.preventDefault(); 
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum==='')
    return;
    let div= currentSum/parseInt(currentNum);
    setCurrentSum(div);
    document.querySelector('#num').value="";
      
  }

  const Clear=(e)=>{
    e.preventDefault();
    // console.log('sum:', currentSum);
    // document.querySelector('form').reset();
    if(clear) setClear(true);
    setCurrentSum(0);
  }

  return (
    <div className="App">
      <div className="app-title">
        <h1> Little Citizen 1 Calculator</h1>
      </div>
      <form>
            <input type="text" id="result" value={currentSum}  readOnly placeholder="result" />   
            <input type="text" id="num" placeholder="enter a number" />
            <button onClick={Add}>Add</button>
            <button onClick={Sub}>Sub</button>
            <button onClick={MUlt}>MUlt</button>
            <button onClick={Div}>Div</button>
            <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default App;
