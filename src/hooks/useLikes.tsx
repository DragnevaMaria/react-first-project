import { useState, useEffect } from "react"

export function useLike(id: number, initLikes: number) {
    const [likes, setLikes] = useState(initLikes)
    const [isLiked, setIsLiked] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        async function loadLikes() {
            try {
                const savedLikes = localStorage.getItem(`likes-${id}`)
                const savedIsLiked = localStorage.getItem(`isLiked-${id}`)

                const likesValue = savedLikes ? Number(savedLikes) : 0
                const likedValue = savedIsLiked === 'true'
                // if (savedLikes) {
                //     setLikes(Number(savedLikes))
                //     setIsLiked(true);
                // }
                if (!isNaN(likesValue)) {
                    setLikes(likesValue)
                    
                } else {
                    setLikes(0)
                }
                setIsLiked(likedValue)
            } catch (error) {
                setError(`Error loading likes: ${error}`)
            }
        }
        loadLikes()
    }, [id])


    const incrementLikes = async () => {
        if (!isLiked) {
            try {
                const newLikes = likes + 1
                setLikes(newLikes) // обновление состояния лайков
                setIsLiked(true) // лайк поставлен
                // save в localStorage
                await localStorage.setItem(`likes-${id}`, String(newLikes))
                await localStorage.setItem(`isLiked-${id}`, 'true')
            } catch (error) {
                setError(`Error saving likes: ${error}`)
            }
        }
    }

    return { likes: likes, isLiked: isLiked, error: error, incrementLikes } 

}
