import { useState } from "react"
import styles from '../../styles/todoitem.module.css';
import Link from 'next/link';
import { editTodoItem} from "../../modules/data";
import { useAuth } from '@clerk/nextjs';



export default function TodoItem({taskDescription, taskCategory, taskId, taskStatus}) {
    const [done, isDone] = useState(taskStatus);//state
    const { getToken } = useAuth();


    
    async function setDone() {
        if (!done){
            const token = await getToken({ template: 'codehooks' })
            editTodoItem(token, taskId, {doneStatus: !done})
            isDone(!done)
        }
    }

    return (
        <div className={styles.todoItem}>
            <input className={styles.itemCheckbox} type="checkbox" checked={done} onChange={setDone} />
            <p className={styles.itemDescription}>{taskDescription.length > 40 ? taskDescription.slice(0, 40) + '...' : taskDescription}</p>
            <p className={styles.itemCategory}>{taskCategory}</p><br/>
            <Link className={styles.itemLink} href='../todo/[id]' as={`/todo/${taskId}`}> more details</Link>
        </div>
    );
}