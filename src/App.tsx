
import './App.css'
import {Fragment, useState} from "react";
import {useGetPaginatedPosts} from "./services/service.api.ts";


const DEFAULT_LIMIT = 10;
const TOTTAL_PAGES=10;


function App() {
  const [pagination, setPagination] = useState<{ limit: number; offset: number }>({
    limit:DEFAULT_LIMIT;
    offset:0;
  });
const {isFetching:isPaginatedPostFetching,
refetch, data:paginatedposts}=useGetPaginatedPosts(pagination)
  const handleChangePAge=async (offset:number) => {
  setPagination((prevState)=>({...prevState,offset}))
  await refetch()}
  if(isPaginatedPostFetching)return <div>Loading...</div>
  if(!paginatedposts){return null}
  return (
      <>
        {paginatedposts.map((item)=>(
            <Fragment key={item.id}>
              <div>id:{item.id}</div>
              <div>body:{item.body}</div>
              <div>title:{item.title}</div>
              <div>userId:{item.userId}</div>
            </Fragment>
        ))}
       <div>
         <button onClick={()=>handleChangePAge(0)} disabled={pagination.offset === 0}>
           первая</button>
         <button onClick={()=>handleChangePAge(pagination.offset - pagination.limit)}
                 disabled={pagination.offset === 0}>
           преведущая</button>
         <span>страничка: {pagination.offset/pagination.limit+1}</span>
         <button onClick={()=>handleChangePAge(pagination.offset + pagination.limit)}
                 disabled={pagination.offset === (TOTTAL_PAGES - 1) * pagination.limit}>
           следущая</button>
         <button onClick={()=>handleChangePAge((TOTTAL_PAGES-1)*pagination.limit )}
                 disabled={pagination.offset === (TOTTAL_PAGES-1) * pagination.limit}>
           последняя</button>

       </div>
      </>
  )
}

export default App
