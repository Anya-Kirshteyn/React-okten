import type {TypeTodoUser} from "../../models/todoUser.ts";
import type {FC} from "react";
import styles from "./todosUser.module.css"

type todoPropType={
    post:TypeTodoUser
}

const TodosUser: FC<todoPropType>=({post})=>{
    return (
        <div className={styles.div}>
            <h3>User ID:{post.userId}</h3>
            <b>post ID:{post.id}</b>
            <p>status:{post.completed}</p>
            <mark>{post.title}</mark>

        </div>
    )
}
export default TodosUser