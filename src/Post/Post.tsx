import { useState } from "react"
import './Post.css'

export interface IPostProps{
    title: string,
    description: string,
    picture: string,
    category: string[],
    author: string,
    children?: React.ReactNode
}

export function Post(props:IPostProps){
    const [amount, setAmount] = useState(0)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    function incrementAmount() {
        setAmount(amount+1)
        setButtonDisabled(true)
    }
    return (
        <div className="post">
            <h1>{props.title}</h1>
            <p>{props.author}</p>
            <img className="img-post" src={props.picture} alt="" />
            <p>{props.description}</p>
            <div className="like">
                <button onClick={incrementAmount} 
                disabled={buttonDisabled}>♥</button>
                <p>Likes: {amount}</p>
            </div>
        </div>
    )   
}
