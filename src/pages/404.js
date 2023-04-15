import { useRouter } from 'next/router'
import styles from '@/styles/404.module.css';


export default function NotFoundPage(){
  const router = useRouter()

  const goToTodos = () => {
    router.push('/todos')
  }

  return (
    <div>
      <div className={styles.mainText}>
        <h1>404 - Page Not Found</h1>
        <p>What are you doing🤔</p>
        <button onClick={goToTodos}>Back to Todos</button>
      </div>
    </div>
  )
}