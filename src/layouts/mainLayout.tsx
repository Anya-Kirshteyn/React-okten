import {Link, Outlet} from "react-router-dom";

export const MainLayout=()=>{
    return (
        <div>
            <div>
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='users'>to Users</Link></li>
                    <li> <Link to='bestuser'>to the best user</Link></li>

                </ul>
            </div>
            <hr/>
            <Outlet/>
        </div>
    )
}