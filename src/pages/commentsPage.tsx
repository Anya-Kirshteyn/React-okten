import {useUsersQuery} from "../queries/useUsersQuery.tsx";

export const CommentsPage=()=>{
    const {data:comments}=useUsersQuery()
    console.log(comments)
    return (<div>CommentsPage</div>)
}
