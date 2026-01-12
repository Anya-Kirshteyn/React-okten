import {Link, Outlet} from "react-router-dom";

const UsersPage = () => {
    return(
        <div>
            <h1>Users</h1>
            <ul>
                <li><Link to={"jsonplaceholder"}>users of jsonplaceholder</Link></li>
                <li><Link to={"dummyjson"}>users of dummyjson</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    )
}
export default UsersPage