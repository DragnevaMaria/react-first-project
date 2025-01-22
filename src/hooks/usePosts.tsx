import { useEffect, useState } from "react"
import { posts as staticPosts } from "../shared/PostsList/postsData"

export interface IPost{
    id: number,
    title: string,
    description: string,
    image: string,
    category: string[],
    author: string,
    like: number,
}

export function usePosts(){
    const [posts, setPosts] = useState<IPost[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    useEffect(()=>{
        async function getPosts(){
            try{
                setIsLoading(true)
                // const response = await fetch('https://fakestoreapi.com/posts')
                // const response = await fetch('https://fakestoreapi.com/products')
                const response = await fetch('https://fakestoreapi.com/products')
                const posts = await response.json()
                const apiPosts = posts.map((product: any): IPost => ({
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    image: product.image,
                    category: [product.category],
                    author: "API Author", 
                    like: 0, 
                }))
                setPosts([...staticPosts, ...apiPosts])
                // setPosts(posts)
                // setPosts(staticPosts)
            }
            catch(error){
                // const err = error as string
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            }
            finally{
                // setIsLoading(true)
                setIsLoading(false)
            }
        }
        getPosts()
        
    },[])
    return {posts: posts, isLoading: isLoading, error: error}
}