import {useEffect, useState} from "react";


export const useFetch=<T,>(url:string)=>{

    const [object,setObject]=useState<T>()

    useEffect(()=>{
        fetch(url).then(res=>res.json())
            .then(res=>setObject(res))
    },[url])
    return object
}



