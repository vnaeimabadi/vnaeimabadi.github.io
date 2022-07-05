import React,{useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [loading,setLoading]=useState(false)
  const [code,setCode]=useState('')
  return (
    <div className="App">
      <header className="App-header">
        <div className='button' style={{backgroundColor:"black",color:"white",padding:"10px",borderRadius:10,cursor:"pointer"}}
        onClick={()=>{
          console.log("aa");
        }}
        >
          برای دریافت کد کلیک کنید
        </div>
        <div>
        {`code: ${code}`}
        </div>
      </header>
    </div>
  );
}

export default App;
