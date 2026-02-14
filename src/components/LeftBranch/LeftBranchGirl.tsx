import {useContext} from "react";
import {ThemeContext} from "../../context/buttonThemeContext.tsx";

export const LeftBranchGirl = () => {
  const {themeValue}=useContext(ThemeContext);


    return (
<div>LeftBranchGirl
    <hr/>

    <p>theme color is:{themeValue}</p>


</div>
    )
}