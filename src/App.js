import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Item from './components/Item'
import ItemDate from './components/ItemDate';
let name="poonji";
function App() {
  return (
    <>
     <Navbar title="TextUtils" />
     <div className="container my-3">
     <TextForm heading="enter the text to analyze"/>
     </div>

    </>
  );  
}

export default App;
