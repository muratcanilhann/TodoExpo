import { Todo } from "src/types/todo";

export interface TodoCardProps{
    todo: Todo,
    deleteTodo: (id:number) => void
}