import Link from 'next/link';
import styles from '@/styles/header.module.css';
import { UserButton } from "@clerk/clerk-react";


export default function Header() {
    
    
    return (
        <nav className={styles.headerMain}>
            <span className={styles.headerLinksList}>
                <Link className={styles.headerLink} href ="/todos"> Todo</Link>
                <Link className={styles.headerLink} href ="/done"> Done</Link>
            </span>
            <span className={styles.headerUserBtn}>
                <UserButton />
            </span>
        </nav>
    );
}