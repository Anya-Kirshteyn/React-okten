import {Outlet} from "react-router-dom";
import {MenuComponent} from "../components/MenuComponent.tsx";

const MainLayout = () => {
    return <>
        <MenuComponent/>
        <hr/>
        <Outlet/>
        </>
}
export default MainLayout