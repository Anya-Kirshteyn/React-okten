import type {ErrorResponse} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";

interface RequestProps {
    newPassword: string;
    resetPasswordToken: string;
    userId:string
}
export const useConfirmResetPasswordMutation = ()=>{
    const {post}=useApi<null>();

    const route=`user/confirm-reset-password`;

    return useMutation({
        mutationFn:async ({
            newPassword,
            resetPasswordToken,
            userId,
        }:RequestProps):Promise<null | ErrorResponse>=>{
            return post({
                route,
                body:{
                    newPassword,
                    resetPasswordToken,
                    userId,
                }
            })
        },
        retry:false
    })
}