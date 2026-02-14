import {useContext} from "react";
import {ButtonThemeContext} from "../../context/buttonThemeContext.tsx";

export const LeftBranchGirl = () => {
  const {themeValue}=useContext(ButtonThemeContext);


    return (
<div>LeftBranchGirl
    <hr/>

    <p>theme color is:{themeValue}</p>


</div>
    )
}