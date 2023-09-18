//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
//import Item from './components/Item'
//import ItemDate from './components/ItemDate';
import About from './components/About';
import Alert from './components/Alert';
//let name="poonji";
function App() {
  const[mode,setMode]=useState('light');
  const[aler,Alert]=useState(null);

  const showAlert=(message,type)=>{

  }
  
  const toggleMode=()=>{
    if(mode=='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
  
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
     <Navbar title="TextUtils" mode={mode }toggleMode={toggleMode}/>
     <Alert alert="this is a alert"/>
     <div className="container my-3">
   { /* <TextForm heading="enter the text to analyze"/> */}
   <About/>
     </div>

    </>
  );  
}

export default App;
