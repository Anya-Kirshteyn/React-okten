import type { TypeTodoUser } from "../models/todoUser.ts";

const todoURLbase = import.meta.env.VITE_APP_TODOS;

export const GetTodoPosts = async (): Promise<TypeTodoUser[]> => {
    const res = await fetch(todoURLbase);
    return res.json();
};