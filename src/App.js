import React,{ useState} from 'react'
import './App.css';

function App() {
  const [input,setInput] = useState('');
  const [result,setResult] = useState(0);
  const handler = e =>{
      setInput(e.target.value);
  } 
  const f1 = () => setInput('');
  const f2 = () => setResult('');
  return (
    <div className='container'>
        <div className='result'>
            <input type="text"  value={input} name="input" onChange={handler}/>
            <br />
            <h4>Result :{result}</h4>
            <button className='res-btn' onClick = {()=> setResult(eval(input))}>Result</button>
        </div>
        <div className='input'>
            <button onClick={() => setInput(input+'1')}>1</button>
            <button onClick={() => setInput(input+'2')}>2</button>
            <button onClick={() => setInput(input+'3')}>3</button>
            <button onClick={() => setInput(input+'4')}>4</button>
            <button onClick={() => setInput(input+'5')}>5</button><br/>

            <button onClick={() => setInput(input+'6')}>6</button>
            <button onClick={() => setInput(input+'7')}>7</button>
            <button onClick={() => setInput(input+'8')}>8</button>
            <button onClick={() => setInput(input+'9')}>9</button>
            <button onClick={() => setInput(input+'0')}>0</button><br/>

            <button onClick={() => setInput(input+'+')}>+</button>
            <button onClick={() => setInput(input+'-')}>-</button>
            <button onClick={() => setInput(input+'*')}>*</button>
            <button onClick={() => setInput(input+'/')}>/</button>
            <button className='clr' onClick={() => {f1();f2();}}>clr</button>
        </div>  
    </div>

  );
}

export default App;
