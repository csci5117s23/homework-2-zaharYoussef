import { useState } from "react"
import Link from 'next/link';
import styles from '@/styles/sideBar.module.css';

export default function SideBar() {

    const [input, changeInput] = useState("");

    const handleInputChange = (event) => {
        changeInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        changeInput("");
    };
    
    
    return (
        <nav class={styles.sideBarMain}>
            <form onSubmit={handleSubmit}>
                <label>
                    Add category   
                    <input type="text" value={input} onChange={handleInputChange} />
                </label>
                <button type="submit">+</button>
            </form>
            <span>
                <div class={styles.categoryLinkBox}>
                    <Link class={styles.categoryLink} href ="/"> category 1</Link>
                </div>
                <div class={styles.categoryLinkBox}>
                    <Link class={styles.categoryLink} href ="/"> category 2</Link>
                </div>
                <div class={styles.categoryLinkBox}>
                    <Link class={styles.categoryLink} href ="/"> category 3</Link>
                </div>
            </span>
        </nav>
    );
}