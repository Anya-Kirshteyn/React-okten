interface RequestProps {
    keys: Record<string, string>
}
type Response= null | {error:string;details: Record<string, string[]>}
export const useConnectProvider = ({providerKind}:Input)=>{
    const route=`task/provider/${providerKind}/user-keys`

    const {putPrivate}=useApi<Response, RequestProps>()

    const queryClient=useQueryClient()
}