import { ReactNode } from "react"
import { Header } from "../Header/Header"
import { Main } from "../Main/Main"
import { PostsList } from "../PostsList/PostsList"
import { Footer } from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import './Layout.css'

interface ILayoutProps {
    // Children - спеціальна властивість react, яка передається через props
    // Дозволяє вкладувати будь-які елементи в компонент
    // Якщо між відкриваючим та закриваючим тегом компонента, ми вписуємо будь-які елементи (компоненти), 
    // тоді вони будуть передані в children
    children?: ReactNode
}

export function Layout(props: ILayoutProps){
    return (
        <div className="layout">
            <Header></Header>
            <Main>
                <Outlet />
            </Main>
            <Footer></Footer>
        </div>
    )
}
