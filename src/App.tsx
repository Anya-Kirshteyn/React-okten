import {LeftBranchMain} from "./components/LeftBranch/LeftBranchMain.tsx";
import {RightBranchMain} from "./components/RightBranch/RightBranchMain.tsx";
import {useState} from "react";
import {ButtonThemeContext} from "./context/buttonThemeContext.tsx";
import './App.css'


function App() {

const [theme,setTheme]=useState<'light' | 'dark'>("light");

const toggleTheme = () => {
  setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
}


  return (
    <>
      <ButtonThemeContext.Provider value={{
        themeValue:theme,
        toggleTheme
      }}>


    <div className={theme}>


      <LeftBranchMain/>
      <hr/>
      <RightBranchMain/>
    </div>

        </ButtonThemeContext.Provider>
    </>
  )
}

export default App
