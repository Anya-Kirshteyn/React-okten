import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return(<ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/authentication/resources'}>authorised resources</Link></li>
    </ul>)
}