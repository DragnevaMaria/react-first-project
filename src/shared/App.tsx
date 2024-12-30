import {PostsList} from "./PostsList/PostsList"
import {Layout} from "./Layout/Layout"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {PostPage} from "../pages/PostPage/PostPage"
import { MainPage } from "../pages/MainPage/MainPage"
import NotFound from './NotFound'


export function App(){
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/" element={<MainPage></MainPage>}></Route>
                    <Route path="/posts" element={<PostsList></PostsList>}></Route>
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="*" element={<NotFound></NotFound>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}
