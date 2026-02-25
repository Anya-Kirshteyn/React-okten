export interface Posts{
    title:string,
    body:string,
    id:string,
    userId:string,
}
export const useGetPaginatedPosts=({limit,offset}:{limit:number; offset:number}) => {
    const {get}=useApi<Posts[]>();
    return useQuery({
        queryKey:['posts',limit,offset],
        queryFn: async ()=>{
            return get({route:`/posts?_start=${offset}&_limit=${limit}`})}
        ,placeholderData:keepPreviousData})}