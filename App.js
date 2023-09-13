import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'; 

import {
  BrowserRouter as Router,
  Routes, // we used Routes instead of switches
  Route
} from "react-router-dom"; 


function App() {
  return (
    <>
    <Router>
    <div className='Container'>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Navbar current_action = "asap"/>} />
      </Routes>
    </div>
    </Router>
    
    </>
    
  );
}

export default App;
