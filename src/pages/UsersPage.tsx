import {Link, Outlet, useParams} from "react-router-dom";
import {UsersComponent} from "../components/users/UsersComponent.tsx";
import {CartsComponent} from "../components/carts/CartsComponent.tsx";
import {useState} from "react";


const UsersPage=()=>{
    const {source}=useParams();
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    return (
      <div>
          <ul>
              <li>
                  <Link to="dummyjson">dummyjson</Link>
              </li>

          </ul>

         <hr/>
          {source && <UsersComponent source={source!} onSelectUser={setSelectedUserId}/>}
          <Outlet/>
          <div>
              <CartsComponent userId={selectedUserId}/>
          </div>
      </div>

    )
}
export default UsersPage;