import {useMutation, useQueryClient} from "@tanstack/react-query";

interface Input{
    prividerKind : string;
}

interface RequestProps {
    keys: Record<string, string>
}
type Response= null | {error:string;details: Record<string, string[]>}
export const useConnectProvider = ({providerKind}:Input)=>{
    const route=`task/provider/${providerKind}/user-keys`

    const {putPrivate}=useApi<Response, RequestProps>()

    const queryClient=useQueryClient()
    return useMutation({
        mutationFn: async ({keys}:RequestProps):Promise<Response> => {
            return putPrivate({
                route,
                body:{keys}
            })
        },
        onSuccess :async (data)=>{
            if(typeof data === 'object' && data?.error)return;
            await queryClient.refetchQueries({queryKey:['providerQuery'] })
        },
        retry:false
    })
}