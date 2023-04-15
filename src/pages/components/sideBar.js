import { useState, useCallback, useEffect } from "react"
import styles from '@/styles/sideBar.module.css';
import { useAuth } from "@clerk/nextjs";
import CategoryLink from "./categoryLink";


import { getCategories, addCategory } from "../../modules/data";


export default function SideBar( {origin}) {

    const [input, changeInput] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const [loading, setLoading] = useState(true)


    const fetchData = useCallback(async () => {
        const token = await getToken({ template: 'codehooks' })
        const categories = await getCategories(token, userId)
        setCategoryList(categories)
        setLoading(false);
    }, [getToken, userId, loading, categoryList])

    useEffect(() => {
        async function firstLoad() {
            fetchData()
        }
        firstLoad()
    }, [fetchData])

    const handleInputChange = (event) => {
        changeInput(event.target.value);
    }


    async function addNewCategory(event)  {
        event.preventDefault();
        if (input!==""){
            const duplicate = categoryList.find((cat) => cat.category === input.trim());
            if (duplicate) {
            alert("Category '"+input+"' already exists😑");
            return;
            }
            const token = await getToken({ template: "codehooks" });
            const newCategory = {
                user: userId,
                category: input
            }
            const newCategoryList = await addCategory(token, newCategory);
            changeInput("");
            setCategoryList(categoryList.concat(newCategoryList));
        }
    }    
    
    return (
        <nav className={styles.sideBarMain}>
            <form onSubmit={addNewCategory}>
                <label>
                    Add category   
                    <input type="text" value={input} onChange={handleInputChange} />
                </label>
                <button type="submit">+</button>
            </form>
            <span>
                {categoryList.map((category) => (
                    <CategoryLink key={category._id} origin={origin} idCategory={category._id} category={category.category} ></CategoryLink>
                ))}
            </span>
        </nav>
    );
}