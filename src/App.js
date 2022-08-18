//REACT IMPORTS
import { useState, useEffect } from "react"
//COMPONENT IMPORTS
import Header from "./components/Header"
import About from "./components/About"
import Services from "./components/Services"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
//CSS
import './index.css'


function App() {
// STATE FOR DARKMODE
const [theme, setTheme] = useState(null);

//USEEFFECT TO SET THEME BASED ON WINDOW.MATCHMAEDIA API
useEffect(() => {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    setTheme('dark');
  }else{
    setTheme('light');
  }

}, []);

//USEEFFECT TO ADD AND REMOVE DARK CLASS
useEffect(() => {
  if(theme ==='dark'){
    document.documentElement.classList.add('dark');
  }else{
    document.documentElement.classList.remove('dark');
  }

}, [theme]);


  return (
    <div id="appContainer" className="font-nunito">

        {/* Header section including navbar   */}
        <Header theme={theme} setTheme={setTheme}/>
        {/* ABOUT */}
        <About theme={theme}/>
        {/* SERVICES */}
        <Services/>
        {/* WORKS */}
        <Works/>
        {/* CONTACT */}
        <Contact/>
       {/* FOOTER */}
       <Footer/>


        </div>
  );
}

export default App;


