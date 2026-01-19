import type {IDummyJsonComment} from "../models/dummyJSONmodels/allDummyJSONmodels.ts";
import {URLS} from "../constantas/urls.tsx";
import type {IcommentsJSONplaceholder} from "../models/JSONplaceholderModels/allJSONplaceholderModels.ts";

export const CommentsServices={
    getCommentsDummy:async ():Promise<IDummyJsonComment[]>=>{
            const res=await fetch(URLS.commentsDummyJSON.allComments)
        const data=await res.json()
        return data.comments;
    },
    getCommentsPlaceholder:async ():Promise<IcommentsJSONplaceholder[]>=>{
        return await fetch(URLS.commentsPlaceholder.allComments)
            .then(res => res.json())
    }

}