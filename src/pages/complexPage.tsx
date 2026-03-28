import {useParams} from "react-router-dom";
import {usePostQuery} from "../queries/post/usePostsByUserQuery .ts";
import {useUserQuery} from "../queries/user/useUserQuery.ts";
import {UsersComponent} from "../components/usersComponent.tsx";
import {PostWithCommentsComponent} from "../components/PostWithCommentsComponent.tsx";

export const ComplexPage=()=>{
    const {userId}=useParams<{userId:string}>();
    const userIdNumber= userId ? Number(userId) : undefined;

    if(!userIdNumber || isNaN(userIdNumber)){
        return <div>wrong/non-existent user Id</div>;
    }

    const {data: user, isLoading: userLoading,error: userError}=useUserQuery(userIdNumber);
    const {data:posts, isLoading:postsLoading, error:postsError}=usePostQuery(userIdNumber);

if(userLoading || postsLoading)return <div>loading...</div>;
    if(userError)return <div>error downloading user...</div>;
    if(postsError)return <div>error downloading posts...</div>;
    if(!user) return <div>no user found...</div>;

    return (
        <div style={{padding:'20px'}}>
            <h1>Complex page of User:{user.name}</h1>
            <section>
                <h2>User data</h2>
            <UsersComponent user={user} key={user.id}/>
            </section>

            <section>
                <h2>User posts</h2>
                {posts?.length === 0 ?(
                    <p>This user does not have posts</p>
                ):(
                    posts?.map(post=><PostWithCommentsComponent post={post} key={post.id}/>)
                )
                }
            </section>
        </div>
    )}

