import {useApi} from '../../useApi.ts'

interface User{
id:string;
name:string}
export const useGetUser=({userId}:{userId:string})=>{
const {get}= useApi<User[]>();
return useQuery({
queryKey:['users',userId],
queryFn:async()=>{
return get({route: `/users/${userId}`})
}
})
}

const App=()=>{
const{
data:user,
isFetching: isUserLoading,
status: userStatus}=useGetUser({userId:String(1)})


==================================================================================

interface RequestProps {
title: string;
body: string;
userId: string;
}

interface Response extends Omit<RequestProps, 'userId'> {
id: number;
userId: number;
}
export const useCreatePost = () => {
const { post } = useApi<Response>();
const route = '/post';

return useMutation({
mutationFn: async ({ title, userId, body }: RequestProps): Promise<Response> => {
return post({
route,
body: {
title,
body,
userId
}
});
},
retry: false
});
};
const App = () => {
const { data: users, isFetching } = useGetUsers();

const [postTitle, setPostTitle] = useState<string>("");
const [postBody, setPostBody] = useState<string>("");

const { mutateAsync, data: post } = useCreatePost();

const handleCreatePost = async ({ userId }: { userId: string }) => {
try {
const response = await mutateAsync({
userId,
body: postBody,
title: postTitle
});

      if (response) {
        console.log(response);
      }

      return;

      console.log('no response');
    } catch (e) {
      console.log(e);
    }
};

if (post) {
return (
<>
<div>
{post.title} = {post.body} = {post.id}
</div>
</>
);
}

return (
<div>
{users?.map((user) => {
return (
<div key={user.id}>
{user.id} = {user.name}
<button onClick={async () => await handleCreatePost({ userId: user.id })}>
create post by user id
</button>
</div>
);
})}

      <input
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />

      <input
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
      />
    </div>
);
};
=========================================================================================================

