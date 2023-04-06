import { useState } from "react"
import styles from '../../styles/todoitem.module.css';
import Link from 'next/link';

export default function TodoItem({taskTitle, taskDescription, taskDueDate}) {
    const [done, isDone] = useState(false);//state

    function changeStatus(event) {
        isDone(event.target.checked);
      }
    

    return (
        <div class={styles.todoItem}>
            <span>
                <input type="checkbox" checked={isDone} onChange={changeStatus} /> <br/>
                {taskTitle}<br/>
                {taskDescription}<br/>
                {taskDueDate}<br/>
                <Link href ="/"> more details</Link>
            </span>
        </div>
    );
}