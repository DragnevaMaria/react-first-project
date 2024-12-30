import { useState, useEffect } from 'react'
import { posts as staticPosts } from "../shared/PostsList/postsData"
import { IPost } from './usePosts'

export function usePostById(id: number) {
    // const [post, setPost] = useState<IPost[]>([])
    const [post, setPost] = useState<IPost>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()
    // https://dev.to/api/post/${id}
    // https://fakestoreapi.com/posts/${id}
    // https://dev.to/api/articles/${id}
    // https://fakestoreapi.com/products/${id}
    useEffect(() => {
        async function getPost() {
            try {
                setIsLoading(true)
                // const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                // const post = await response.json()
                // setPost(post)
                // const fetchedPosts: IPost[] = await response.json()
                // setPost([...staticPosts, ...fetchedPosts])
                const foundPost = staticPosts.find((item) => item.id === id)

                if (foundPost) {
                    setPost(foundPost)
                } else {
                    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                    if (response.ok) {
                        const product = await response.json()
                        const productPost = {
                            id: product.id,
                            title: product.title,
                            description: product.description,
                            image: product.image,
                            category: [product.category],
                            author: "API Author",
                            like: 0,  
                        }
                        setPost(productPost)
                    } else {
                        throw new Error('Product not found')
                    }
                }
            }
            catch (error) {
                // instanceof
                // const err = error as string
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            }
            finally {
                setIsLoading(false)
            }
        }
        getPost()
    }, [id])

    return {post: post, isLoading: isLoading, error: error}
}
