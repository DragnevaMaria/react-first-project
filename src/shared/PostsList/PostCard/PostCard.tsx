
import { Link } from "react-router-dom"
import { useLike } from "../../../hooks/useLikes"
import './PostCard.css'
import { useContext } from "react";
import { LikesPostsContext } from "../../App";

export interface IPostProps{
    id: number,
    title: string,
    description: string,
    image: string,
    category: string[],
    author: string,
    like: number,
    children?: React.ReactNode
}

export function Post(props:IPostProps){
    // const [amount, setAmount] = useState(0)
    // const [likes, setLikes] = useState(props.like)
    const { likes, isLiked, incrementLikes } = useLike(props.id, props.like)
    const { addLikedPost} = useContext(LikesPostsContext)
    // useEffect для загрузки сохранённого состояния
    // useEffect для приведения like в состояние готовности к использованию состояния из localStorage при загрузке страницы
    // useEffect(() => {
    //     const savedLikes = localStorage.getItem(`likes-${props.id}`)
    //     if (savedLikes) {
    //         setLikes(Number(savedLikes))
    //         setButtonDisabled(true)
    //     }
    // }, [props.id]) 
    // function incrementLikes() {
    //     setLikes(likes + 1)
    //     setButtonDisabled(true)
    // }
    const handleLike = () => {
      // Увеличивание количество лайков
      incrementLikes()
      // Добавление лайкнутого поста в контекст
      addLikedPost({ id: props.id, likes: likes + 1 })
    }

    return (
      <div className="post">
        <Link className="postLink" to={`/post/${props.id}`}>
          <h1>{props.title}</h1>
          <p>{props.author}</p>
          <img className="img-post" src={props.image} alt="" />
          <p>{props.description}</p>
        </Link>
        <div className="like">
          <button
            className="button_like"
            onClick={handleLike}
            disabled={isLiked}
          > ♥ {likes}
          </button>
        </div>
        
      </div>
    )   
}
