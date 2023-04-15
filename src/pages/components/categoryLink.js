// import { useState } from "react"
import styles from '@/styles/sideBar.module.css';
import Link from 'next/link';

export default function CategoryLink({origin, category}) {
    

    return (
        <div className={styles.categoryLinkBox}>
          {origin === 'todos' ? (
            <Link className={styles.categoryLink} href='../todos/[category]' as={`/todos/${category}`}>
              {category}
            </Link>
          ) : (
            <Link className={styles.categoryLink} href='../done/[category]'as={`/done/${category}`}>
              {category}
            </Link>
          )}
        </div>
      );
}