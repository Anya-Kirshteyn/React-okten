import {Link, Outlet, useParams} from "react-router-dom";
import {PostsComponent} from "../components/posts/PostsComponent.tsx";

const PostsPage = () => {
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
            {source && <PostsComponent source={source}/>}
            <Outlet/>
        </div>

    )
}
export default PostsPage;