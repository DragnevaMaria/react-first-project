import { useState } from "react"
import {PostsList} from "./PostsList/PostsList"
import { Layout } from "./Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export function App(){
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostsList></PostsList>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}
