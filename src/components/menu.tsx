import {Link} from "react-router-dom";

export const Menu=()=>{
    return (<ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="cars">Cars</Link></li>
        <li><Link to="cars/create">to Create car</Link></li>
    </ul>)
}