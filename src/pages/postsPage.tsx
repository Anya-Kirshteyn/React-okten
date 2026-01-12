import {Link, Outlet} from "react-router-dom";

const PostsPage = () => {
    return(
        <div>
            <h1>Posts</h1>
            <ul>
                <li><Link to={"jsonplaceholder"}>jsonplaceholder posts</Link></li>
                <li><Link to={"dummyjson"}>posts of dummyjson</Link></li>
            </ul>
            <hr/>
            <Outlet/>

        </div>
    )
}
export default PostsPage