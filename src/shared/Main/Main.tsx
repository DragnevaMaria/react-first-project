import { ReactNode } from "react"
import './Main.css'
import { LikedPostsList } from "../LikedPostsList";


interface IMainProps {
    children?: ReactNode
}

export function Main(props: IMainProps) {
    return (
        <div className = "Main">
            {props.children}
            {/* <LikedPostsList /> */}
        </div>
    )
}