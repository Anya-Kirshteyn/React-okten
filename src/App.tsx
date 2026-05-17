import {Link, Outlet, useNavigate} from "react-router-dom";
import {useUsersQuery} from "./queries/user/useUsersQuery.tsx";


function App() {
const navigate=useNavigate();
const {data:users,isLoading}=useUsersQuery();

const handleUserSelect=(event: React.ChangeEvent<HTMLSelectElement>)=>{
    const userId=event.target.value;
    if(userId){
        navigate(`/complex/${userId}`)
    }
}


  return (
    <div>
        <ul>
            <li><Link to={'/users'}>users</Link></li>
            <li><Link to={'/comments'}>comments</Link></li>
            <li><Link to={'/posts'}>posts</Link></li>
            <li>
                <select onChange={handleUserSelect} defaultValue="">
                <option value="" disabled>Select user by id,to see they complexed page</option>
                {!isLoading && users?.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select></li>
        </ul>
        <hr/>
        <Outlet/>
    </div>

  )
}

export default App
