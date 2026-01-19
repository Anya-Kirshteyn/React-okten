import {Link, Outlet, useParams} from "react-router-dom";
import {CommentsComponent} from "../components/comments/CommentsComponent.tsx";


const CommentsPage=()=>{
    const {source}=useParams()
    return (
        <div>
            <ul>
                <li>
                    <Link to="jsonplaceholder">jsonplaceholder</Link>
                </li>              <li>
                <Link to="dummyjson">dummyjson</Link>
            </li>

            </ul>
              <CommentsComponent source={source!}/>
            <hr/>
            <Outlet/>
        </div>

    )
}
export default CommentsPage;