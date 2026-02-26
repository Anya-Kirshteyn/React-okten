import {useLocation} from "react-router-dom";

interface Input{
    prividerKind : string;
}
type RequestProps=Record<string, string>;
type OAuthResponse=null | {error : string};

export const useConnectOAuth = ({providerKind}:Input)=> {
    const route=`task/provider`
    const {putPrivate}=useApi<OAuthResponse,RequestProps >()
    const { pathname}=useLocation()

return useMutation({
    mutationFn: async (body:RequestProps):Promice<OAuthResponse>=>{
        return putPrivate({
            route: `${route}/${providerKind}/oauth/token`,
            body:{
                redirect_url:`${window.location.origin}${pathname}?${UrlQueries.OATH_PROVIDER}=${providerKind}`,
                ...body
            }
        })
    }
    retry:false
})
}