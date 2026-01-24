import {useSearchParams} from "react-router-dom";


export const PaginationComponent=()=>{
    const [query,setQuery]=useSearchParams({page:'1'});
    return (<div>
        <button onClick={()=>{
            const currentPage=query.get('page')
            if(!currentPage) return;
            const prevPage=Number(currentPage)-1;
            setQuery({page:prevPage.toString()})
        }}>prev</button>
        <button onClick={()=>{
            const currentPage=query.get('page')
            if(!currentPage) return;
            const nextPage=Number(currentPage)+1;
            setQuery({page:nextPage.toString()})
        }}>next</button>
    </div>)
}