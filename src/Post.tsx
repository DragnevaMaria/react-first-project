import { useState } from "react"

export interface IPostProps{
    title: string,
    description: string,
    picture: string,
    author: string,
    children?: React.ReactNode
}

export function Post(props:IPostProps){
    const [amount, setAmount] = useState(0)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    function incrementAmount() {
        setAmount(amount+1)
        setButtonDisabled(true)
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img style={{
                width: 250,
                height: 150
            }} src={props.picture} alt="" />
            <p>{props.author}</p>
            <p>Likes: {amount}</p>
            <button onClick={incrementAmount} disabled={buttonDisabled}>♥</button>
            <hr />
        </div>
    )
}
