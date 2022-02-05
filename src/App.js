import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import TextForms from './Components/Text/TextForms';

function App() {
  const [mode, setMode]= useState('dark');
  const [textColor, setTextColor]=useState('light')
  const [modeText, setModeText]=useState('Turn On Dark Mode')
  const toggleMode=()=>{
    if(mode==='dark'){  
      setMode('light');
      setTextColor('dark');
      setModeText('Turn On Dark Mode');
    }else{
      setMode('dark');
      setTextColor('light');
      setModeText('Turn On Light Mode');
    }
  }
  return (
    <>
    <div className="container App">
      <Navbar name="TextUtils" mode={mode} textColor={textColor} toggleMode={toggleMode} modeText={modeText} ></Navbar>
      <TextForms header="Enter Text To Analyze"></TextForms>
      <About></About>
    </div>
    </>
  );
}

export default App;
