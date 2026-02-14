import {useContext} from "react";
import { ThemeContext} from "../../context/buttonThemeContext.tsx";


export const ButtonComponent = () => {
    const {toggleTheme}=useContext(ThemeContext);

return(
    <>
    <button onClick={()=>
        toggleTheme()
    }>click</button>

    </>
)

}
