import {Link, Outlet} from "react-router-dom";

const CommentsPage = () => {
  return(
      <div>
          <h1>Comments</h1>
          <ul>
              <li><Link to={"jsonplaceholder"}>comments of jsonplaceholder</Link></li>
              <li><Link to={"dummyjson"}>comments of dummyjson</Link></li>
          </ul>
          <hr/>
          <Outlet/>


      </div>
  )
}
export default CommentsPage;