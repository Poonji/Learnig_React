//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
//import Item from './components/Item'
//import ItemDate from './components/ItemDate';
import About from './components/About';
//let name="poonji";
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode=='light')
    {
      setMode('dark')
  
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
     <Navbar title="TextUtils" mode={mode }toggleMode={toggleMode}/>
     <div className="container my-3">
   { /* <TextForm heading="enter the text to analyze"/> */}
   <About/>
     </div>

    </>
  );  
}

export default App;
