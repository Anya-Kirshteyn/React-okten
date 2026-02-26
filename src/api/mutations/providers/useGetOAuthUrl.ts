import {useLocation} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";

interface RequestProps{
    providerKind:string
}
interface Body{
    redirect_url:string
}
///что делает рекорд и что значат 2 его типизации?
type Response=string | {error:string;details: Record<string, string[]>}

export const useGetOAuthUrl = ()=>{
    const route='task/provider'

    const {putPrivate}=useApi<Response, Body>()
    const {pathname}=useLocation()

    return useMutation({
        mutationFn: async ({providerKind}:RequestProps):Promise<Response>=>{
            return putPrivate({
                route: `${route}/${providerKind}/oauth/authorize`,
                body:{
                    redirect_url: `${window.location.origin}${pathname}?${UrlQueries.OATH_PROVIDER}=${providerKind}`
                }
            })
        }
        retry:false

        )
    })
}