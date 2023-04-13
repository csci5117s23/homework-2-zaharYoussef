import { useState } from "react"
import { useRouter } from 'next/router';
import TodoItem from "./components/todoItem";
import Header from "./components/header"
import SideBar from "./components/sideBar";
import styles from '@/styles/todos.module.css';
import { useAuth } from '@clerk/nextjs';


export default function toDoPage() {

    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const [input, changeInput] = useState("");
    const router = useRouter();


    //uncomment this for logout
    if (!isLoaded || !userId) {
        router.push('/');
    }

    const handleInputChange = (event) => {
        changeInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        changeInput("");
    };

    return (
        <div>
            <Header></Header>
            <div class={styles.contentDisplay}>
                <div className={styles.navSide}>
                    <SideBar></SideBar>
                </div>
                <div className={styles.taskSide}>
                    <h1 className={styles.mainTitle}>My todo list</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input type="text" class={styles.addTaskBox} value={input} onChange={handleInputChange} />
                        </label>
                        <button type="submit">Add Task</button>
                    </form>
                    <TodoItem 
                    taskDescription="this is a very long description, I need to cut it lol" 
                    taskCategory="category"></TodoItem>
                </div>
            </div>
        </div>
    );
}