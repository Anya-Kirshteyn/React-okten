import type {TypeTodoUser} from "../../models/todoUser.ts";
import {useState,useEffect} from "react";
import {GetTodoPosts} from "../../services/todoUser-api-service.ts";
import TodosUser from "../todosUser/todosUser.tsx";

const TodoUsers=()=> {
    const [todos, setTodos]=useState<TypeTodoUser[]>([]);

    useEffect(()=> {
        const fetchTodoPosts = async () => {
            const postsTodo = await GetTodoPosts();
            setTodos(postsTodo);
        }
        fetchTodoPosts();
    },[] )

    return (
        <div>
            {todos.map(post=> <TodosUser post={post} key={post.id}/>

            )}
        </div>
    )
}
export default TodoUsers;