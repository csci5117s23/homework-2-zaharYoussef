import TodoItem from "./components/todoItem";

export default function toDoPage() {
    return (
        <header>
            <h1>main page</h1>
            <TodoItem 
            taskTitle="somethingg" 
            taskDescription="this is a very long description, I need to cut it lol" 
            taskDueDate="04/09/2023"></TodoItem>
        </header>
    );
}