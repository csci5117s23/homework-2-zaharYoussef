import { useState } from "react"
import styles from '@/styles/todos.module.css';
import { useAuth } from '@clerk/nextjs';
import { addTodoItem} from "../../modules/data";


export default function AddTask({category}) {
    const [input, changeInput] = useState("");
    const { isLoaded, userId, sessionId, getToken } = useAuth();


    async function addNewTodo(event) {
        event.preventDefault();
        // changeInput("");
        const token = await getToken({ template: 'codehooks' })
        const todoItem = {
            user: userId,
            description: input,
            category: category,
        }
        await addTodoItem(token, todoItem)
        changeInput("");
    }

    const handleInputChange = (event) => {
        changeInput(event.target.value);
    }
    

    return (
        <form onSubmit={addNewTodo}>
            <label>
                <input type="text" className={styles.addTaskBox} value={input} onChange={handleInputChange} />
            </label>
            <button type="submit">Add Task</button>
        </form>
);
}