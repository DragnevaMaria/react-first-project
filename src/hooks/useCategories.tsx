import { useEffect, useState } from 'react'

export function useCategories() {
    const [categories, setCategories] = useState<string[]>([])
    // https://dev.to/api/post/categories
    // https://fakestoreapi.com/posts/categories
    // https://dev.to/api/articles/categories
    // https://fakestoreapi.com/products/categories
    useEffect(()=>{
        async function getCategories(){
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const categories = await response.json()
            setCategories(categories)
        }
        getCategories()
    },[])
    return {categories: categories}
}
