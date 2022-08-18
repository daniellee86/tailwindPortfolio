//REACT IMPORT
import { useState } from 'react'
//THIRD PARTY
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
//IMAGES
import logo from "../img/logo.png"
import moon from "../img/moon.png"
import man from "../img/man.png"
import happyman from "../img/happyman.png"

function Header({ theme, setTheme}) {
    // STATE FOR HAMBURGER DISPLAY
  const [toggle, setToggle] = useState(false);

  //FUNCTION TO SET TOGGLE STATE
    const handleToggle = () => {
        toggle ? setToggle(false) : setToggle(true); 
    }

   //FUNCTION TO SET DARKMODE STATE
   const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
   }

  return (
    <header id="home" className=" h-[50vh] lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
    {/* Navbar */}
    <nav className="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
        <div className="container mx-auto py-5 px-5 sm:px-0 lg:px-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img className="w-8" src={logo} alt="logo"/>
                <span className="text-2xl font-bold text-indigo-900 dark:text-white">Tailwind.</span>
            </div>
            {/* Nav Links */}
            <ul className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase">
                <li className="hover:text-gray-500">
                    <a href="#home">home</a>
                </li>
                <li className="hover:text-gray-500">
                    <a href="#about">about me</a>
                </li>
                <li className="hover:text-gray-500">
                    <a href="#services">services</a>
                </li>
                <li className="hover:text-gray-500">
                    <a href="#works">works</a>
                </li>
                <li className="hover:text-gray-500">
                    <a href="#contact">contact</a>
                </li>
            </ul>
            {/* Dark mode */}
            <img className="hidden md:block w-5 cursor-pointer" src={moon} onClick={handleThemeSwitch}/>
            {/* Hamburger */}
            <div className="space-y-1 md:hidden cursor-pointer z-30" onClick={handleToggle}>
                <div className={`w-6 h-0.5  ${toggle === true ? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-6 h-0.5  ${toggle === true ? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-6 h-0.5  ${toggle === true ? 'bg-white' : 'bg-black'}`}></div>
            </div>
            {/* Hamburger list */}
            { toggle === true && 
              <ul className=" md:hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 z-20 text-white text-center">
              <li>
                  <a href="#home" onClick={handleToggle}>home</a>
              </li>
              <li >
                  <a href="#about" onClick={handleToggle}>about me</a>
              </li>
              <li >
                  <a href="#services" onClick={handleToggle}>services</a>
              </li>
              <li >
                  <a href="#works" onClick={handleToggle}>works</a>
              </li>
              <li >
                  <a href="#contact" onClick={handleToggle}>contact</a>
              </li>
          </ul>
            }
          

        </div>
    </nav>

    {/* Header content */}
    {/* image */}
    <img className="absolute bottom-0 right-0 sm:left-48 md:left-80 lg:left-0 mx-auto h-3/4 lg:h-5/6 object-cover" src={theme === "dark" ? man : happyman} alt="man pointing"></img>
    {/* circle negative bottom position */}
    <div className="hidden lg:block absolute -bottom-1/2 right-0 left-0 mx-auto w-big h-big -z-20 bg-indigo-900 rounded-full "></div>
    {/* animated text */}
    <div className="absolute top-1/3 left-5 text-3xl sm:left-10 sm:text-4xl md:left-28 md:text-6xl lg:left-10 xl:left-28 2xl:left-46 2xl:text-9xl  font-bold">
        <span className="text-gray-600">Software</span>
        <div>
        <AutoTyping className="text-red-500"
        active // <boolean>
        textRef='Engineer' // <string>
        writeSpeed={150} // <number>
        deleteSpeed={150} // <number>
        delayToWrite={1000} // <number>
        delayToDelete={2000} // <number>
        />
        <BlinkCursor
          active // <boolean>
          blinkSpeed={500} // <number>
        />
        </div>
     </div>
    {/* text */}
    <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg dark:bg-slate-900 dark:shadow-slate-800 absolute top-0 bottom-0 m-auto right-10 bg-white/80 p-6 h-fit w-1/4">
        <h1 className="text-4xl font-bold text-indigo-900 dark:text-white">Hi, Im Daniel</h1>
        <p className="text-gray-400">
            Will code for food. 
        </p>
        <a className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit" href="#contact">Hire Me</a>
    </div>
</header>
  )
}

export default Header