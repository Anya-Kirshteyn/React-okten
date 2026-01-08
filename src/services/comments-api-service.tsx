import type {Icomment} from "../models/commentModel.ts";


export const getComments =async ():Promise<Icomment[]> => {
    const comments = await fetch(import.meta.env.VITE_APP_COMMENTS);
    return comments.json()
}