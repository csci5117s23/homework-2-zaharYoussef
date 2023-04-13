import { useState } from "react"
import styles from '../../styles/todoitem.module.css';
import Link from 'next/link';

export default function TodoItem({taskDescription, taskCategory}) {
    const [done, isDone] = useState(false);//state

    function changeStatus(event) {
        isDone(event.target.checked);
    }
    

    return (
        <div class={styles.todoItem}>
            <input class={styles.itemCheckbox} type="checkbox" checked={isDone} onChange={changeStatus} />
            <p class={styles.itemDescription}>{taskDescription}</p>
            <p class={styles.itemCategory}>{taskCategory}</p><br/>
            <Link class={styles.itemLink} href ="/"> more details</Link>
        </div>
    );
}