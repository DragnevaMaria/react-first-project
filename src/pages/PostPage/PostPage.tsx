import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { usePostById } from "../../hooks/usePostById"
import { RingLoader } from "react-spinners"
import { useLike } from "../../hooks/useLikes"
import "./PostPage.css"

export function PostPage(){
    const navigate = useNavigate()
    const params = useParams()
    const { post, isLoading, error } = usePostById(Number(params.id))
    const { likes, isLiked, incrementLikes} = useLike(Number(params.id), post?.like || 0)
   
   return <div className="postPage">
        { isLoading === true ? (<div className="spiner">
            <RingLoader
                color="#BE8AFF"
                size={60}
                speedMultiplier={0.5}
            />
        </div>) : ( !error ? <>  
            <div className="post_page">
                <div className="p">
                    <p onClick={() => {
                        navigate(-1)
                    }}
                    > ⇐ </p>
                </div>
                <div className="img_like">
                    <img className="img-post_page" src={post?.image} alt="" />
                    <div className="like_page">
                        <button 
                            className="button_like" 
                            onClick={incrementLikes} 
                            disabled={isLiked}>
                                
                            ♥
                        </button>
                        <p>Likes: {likes}</p>
                    </div>
                </div>
                <div className="info">
                    <h1>{post?.title}</h1>
                    <p>{post?.author}</p>
                    <p>{post?.description}</p>
                </div>
            </div>
        </>
        : <div>{error}</div>
        )}
    </div>
}
