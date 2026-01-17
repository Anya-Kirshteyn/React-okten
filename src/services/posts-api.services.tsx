import type {IDummyJsonPost} from "../models/dummyJSONmodels/allDummyJSONmodels.ts";
import {URLS} from "../constantas/urls.tsx";
import type {IPostsJSONplaceholder} from "../models/JSONplaceholderModels/allJSONplaceholderModels.ts";


export const PostsServices={
    getPostsDummy:async ():Promise<IDummyJsonPost[]>=>{
        const res = await fetch(URLS.postsDummyJSON.allPosts);
        const data = await res.json();
        return data.posts;
    },
    getPostsPlaceholder:async ():Promise<IPostsJSONplaceholder[]>=>{
        return await fetch(URLS.postsPlaceholder.allPosts)
            .then(res => res.json())
    }
}
