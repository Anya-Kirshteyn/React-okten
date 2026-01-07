import type {PostType} from "../../models/postType.ts";
import type {FC} from "react";

export interface PostComponent {
    postOne:PostType
}


const PostComponent:FC<PostComponent> = ({postOne}) => {
    return (
        <div>
            <h3><mark>
                User ID:{postOne.userId}
                <br>
                {postOne.title}
                </br>
            </mark></h3>
            <b>Post ID:{postOne.id}</b>
            <p>{postOne.body}</p>

        </div>

    )
}

export default PostComponent