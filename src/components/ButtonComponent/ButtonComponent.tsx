import {useContext} from "react";
import {ButtonThemeContext} from "../../context/buttonThemeContext.tsx";


export const ThemeButtonComponent = () => {
    const {toggleTheme}=useContext(ButtonThemeContext);

return(
    <>
    <button onClick={()=>
        toggleTheme()
    }>click</button>

    </>
)

}
