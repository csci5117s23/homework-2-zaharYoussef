import styles from '@/styles/sideBar.module.css';
import Link from 'next/link';
import { deleteCategory } from "../../modules/data";
import { useAuth } from '@clerk/nextjs';

export default function CategoryLink({origin, idCategory, category}) {
  const { getToken } = useAuth();


  async function deleteSelectedCategory(){
    const token = await getToken({ template: 'codehooks' })
    deleteCategory(token, idCategory)
}
    

    return (
      <div className={styles.linkBox}>
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
        <div>
          <button className={styles.deleteBtn} onClick={deleteSelectedCategory} > - </button>
        </div>
      </div>
      );
}