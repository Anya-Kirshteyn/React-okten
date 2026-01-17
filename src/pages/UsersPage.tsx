import {Link, Outlet, useParams} from "react-router-dom";
import {UsersComponent} from "../components/users/UsersComponent.tsx";


const UsersPage=()=>{
    const {source}=useParams();
    return (
      <div>
          <ul>
              <li>
                  <Link to="jsonplaceholder">jsonplaceholder</Link>
              </li>
              <li>
                  <Link to="dummyjson">dummyjson</Link>
              </li>

          </ul>

         <hr/>
          {source && <UsersComponent source={source!}/>}
          <Outlet/>
      </div>

    )
}
export default UsersPage;