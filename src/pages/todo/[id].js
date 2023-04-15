import Header from "../components/header"
import NotFoundPage from "../404";
import styles from '../../styles/todoPage.module.css';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react"
import { getTodoItem, editTodoItem} from "../../modules/data";




export default function Task() {
    const router = useRouter();
    const { id } = router.query;
    const [task, setTask] = useState(null);
    const [taskDescription, setTaskDescription] = useState("")
    const [done, isDone] = useState(false)
    const [currentCategory, setCategories] = useState("")
    const [loading, setLoading] = useState(true)

    const { isLoaded, userId, sessionId, getToken } = useAuth();

    if (!isLoaded || !userId) {
        router.push('/');
    }

    useEffect(() => {
        const fetchData = async () => {
          const token = await getToken({ template: 'codehooks' })
          const item = await getTodoItem(token, id)
          setTask(item);
          setTaskDescription(item.description);
          setLoading(false);
        }
        fetchData();
    }, [getToken, userId, id])



    function goTodos() {
        router.push('/todos');
    }

    async function setDone() {
        if (!done){
            const token = await getToken({ template: 'codehooks' })
            editTodoItem(token, id, {doneStatus: !done})
            isDone(!done)
        }
    }

    async function saveTaskDescription(event){
        const token = await getToken({ template: 'codehooks' })
        console.log(taskDescription)
        editTodoItem(token, id, {description: taskDescription})
        isDone(!done)
    }

    return (
        <>
        {loading &&  (
            <p>Loading...</p>
        )} { !loading && task ?(
            <div>
            <Header></Header>
            <div className={styles.taskContainer}>
            <h1 className={styles.taskHeader}>Task details</h1>
            <p className={styles.taskStatus}>
                click button to mark task as done
                <input
                    type="checkbox"
                    checked={done}
                    onChange={setDone}
                    className={styles.taskDone}
                />
            </p>
            <div className={styles.editTask}>
                <textarea
                    value={taskDescription}
                    onChange={(event) => setTaskDescription(event.target.value)}
                    className={styles.taskTextArea}
                    />
                <button onClick={saveTaskDescription} className={styles.taskUpdateButton}>
                    update
                </button>
            </div>
            <button onClick={goTodos} className={styles.taskGoTodosButton}>
                back to Todos
            </button>
            </div>
        </div>
        ) : (
            <NotFoundPage />
        )}
        </>
        );
}