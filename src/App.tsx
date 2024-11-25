import {PostsList} from "./PostsList"
import { useState } from "react"

export function App(){
    // const [count, setCount] = useState(0)
    let counter = 0
    return(
        <div>
            {/* <p>{counter}</p>
            <p>{count}</p>
            <button onClick={()=>{
                counter += 1
                setCount(count + 1)
                console.log(counter)
                }}>Increment</button>
            <button onClick={()=>{
                counter -= 1 
                setCount(count - 1)
                console.log(counter) 
                }}>Decrement</button> */}
            <PostsList></PostsList>
        </div>
    )
}
