import logo from './logo.svg';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alerting from './components/Alerting';

function App() {

  const[Mode,setMode] = useState('light');

  const[mode_text,set_modetext] = useState('set dark Mode') 
  const[og_alert,set_alert] = useState(null);

  const show_alert = (message,type) =>{ 

    set_alert(
      {
        msg : message,
        ty : type
      }

    )

    setTimeout(()=>{
      set_alert(null);
    },2000)
   


  }


  const toggleMode = ()=>{ 

    if(Mode === 'dark'){
      setMode('light');
      set_modetext('set dark Mode');
      document.body.style.backgroundColor = 'white'; 
      // now in light mode 
      show_alert("now in light mode" , "success");
    }
    else{
      setMode('dark');
      set_modetext('set light Mode');
      document.body.style.backgroundColor = '#121212';
      show_alert("now in dark mode" , "success");
    }

  }

  return (
    <>
  <Navbar title = "text-utils" mode = {Mode} toggleMode = {toggleMode} setting_text = {mode_text}/>
  <Alerting alert = {og_alert}/>
  <div className="container-1">
  {/* <TextForm heading = "Enter the text to analyze"/> */}
  <About/>
  </div>
    </>
  );
}

export default App;
