import { useRouter } from 'next/router'

export default function NotFoundPage(){
  const router = useRouter()

  const goToTodos = () => {
    router.push('/todos')
  }

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button onClick={goToTodos}>Back to Todos</button>
    </div>
  )
}