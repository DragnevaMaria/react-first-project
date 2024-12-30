
import {Post} from "./PostCard/PostCard"
import { useEffect, useState } from "react"
import { usePosts } from "../../hooks/usePosts"
import { RingLoader } from "react-spinners"
import { useCategories } from "../../hooks/useCategories"
import './PostsList.css'

export function PostsList(){
    const { posts, isLoading, error } = usePosts()
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedCategory, setSelectedCategory] = useState('All')
    const { categories } = useCategories()
    // Функция PostsList с помощью useEffect отслеживает изменения в 
    // selectedCategory и в случае изменения, обновляет и фильтрует 
    // filteredPosts
    useEffect(()=>{
        // Если selectedCategory равна 'All', все продукты отображаются на странице
        if(selectedCategory === 'All'){
            setFilteredPosts(posts)
            // Иначе фильтруем продукты
        } else{
            setFilteredPosts(posts.filter( (post)=>{
                // return posts.category === selectedCategory
                // includes метод 
                return post.category.includes(selectedCategory) 
            }))
        }
        console.log(selectedCategory)
    // Эффект сработает, если selectedCategory изменится
    }, [selectedCategory, posts])
    
    // useEffect(()=>{
    //     async function getPosts(){
    //         const response = await fetch('https://fakestoreapi.com/posts')
    //         const posts = await response.json()
    //         setFilteredPosts(posts)
    //     }
    //     getPosts()
    // },[])    

    return <div className="list-posts-select">
        {/* <select> — это элемент для создания списка с вариантами (опциями) */}
        {/* onChange — событие, срабатывающее, если пользователь меняет опцию */}
        <select className="select" onChange={(event)=>{
            setSelectedCategory(event.target.value)
        }}>
            {/* Опции для выбора продукта*/}
            <option value = 'All'>All</option>
            <option value = 'Programming'>Programming</option>
            <option value = 'Kittens'>Kittens</option>
            <option value = 'Chat-Bot'>Chat-Bot</option>
            <option value = 'Cats'>Cats</option>
            <option value = 'Artificial intelligence'>Artificial intelligence</option>
            
            {categories.map(category => {
                return <option value={category}>{category}</option>
            })}
        </select>
        <div className="list-posts">
            {isLoading === false ? !error ? filteredPosts.map((post) => {
                // key - уникальный ключ используется при рендере массивов
                // нужен для идентифицирования reactом элементов которые отображаются
                    // <img src="" alt="" />
                return <Post  
                    key={post.id}
                    id={post.id}
                    title={post.title} 
                    description={post.description} 
                    image={post.image} 
                    author={post.author}
                    category={post.category}
                    like={post.like}>
                </Post>
                }) : (<div>{error}</div>) : (
                <div className="spinner">
                    <RingLoader
                    color="#BE8AFF"
                    size={60}
                    speedMultiplier={0.5}
                /></div>)
            }
        </div>
    </div>
}
