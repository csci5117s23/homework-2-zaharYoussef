import TodoItem from "../components/todoItem";
import Header from "../components/header"
import SideBar from "../components/sideBar";
import styles from '../../styles/todos.module.css';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from "react"
import { getDoneInCategory} from "../../modules/data";

export default function DoneCategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [todosList, setTodosList] = useState([])
  const [loading, setLoading] = useState(true)


  //uncomment this for logout
  if (!isLoaded || !userId) {
    router.push('/');
  }
  const fetchData = useCallback(async () => {
      const token = await getToken({ template: 'codehooks' })
      const todos = await getDoneInCategory(token, userId, category)

      // update state -- configured earlier.
      setTodosList(todos);
      setLoading(false);
    }, [getToken, userId,category, todosList])

  useEffect(() => {
      async function firstLoad() {
          fetchData()
      }
      firstLoad()
  }, [category])

  return (
    <div>
      <Header></Header>
        <div className={styles.contentDisplay}>
          <div className={styles.navSide}>
              <SideBar origin="done"></SideBar>
          </div>
          <div className={styles.taskSide}>
              <h1 className={styles.mainTitle} >Done tasks in {category}</h1>
              <span>
                        {todosList.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn))
                        .map((todo) => (
                            <TodoItem 
                            key={todo._id}
                            taskDescription={todo.description}
                            taskCategory={todo.category}
                            taskId={todo._id}
                            taskStatus={todo.doneStatus}></TodoItem>
                        ))}                        
                    </span>
          </div>
      </div>
    </div>
  );
}