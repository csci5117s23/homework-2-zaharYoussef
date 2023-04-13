import TodoItem from "./components/todoItem";
import Header from "./components/header"
import SideBar from "./components/sideBar";
import styles from '@/styles/todos.module.css';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';


export default function toDoPage() {

    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const router = useRouter();


    //uncomment this for logout
    if (!isLoaded || !userId) {
        router.push('/');
    }

    return (
        <div>
            <Header></Header>
            <div class={styles.contentDisplay}>
                <div className={styles.navSide}>
                    <SideBar></SideBar>
                </div>
                <div className={styles.taskSide}>
                    <h1 className={styles.mainTitle}>Done Tasks</h1>
                    <TodoItem 
                    taskDescription="this is a done task" 
                    taskCategory="category"></TodoItem>
                </div>
            </div>
        </div>
    );
}