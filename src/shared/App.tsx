import { PostsList } from "./PostsList/PostsList";
import { Layout } from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostPage } from "../pages/PostPage/PostPage";
import { MainPage } from "../pages/MainPage/MainPage";
import NotFound from "./NotFound";
import { createContext, useState, useEffect, ReactNode } from "react";

// Интерфейс для лайкнутых постов
interface ILikedPost {
  id: number;
  likes: number;
}

interface ILikesContext {
  likedPosts: ILikedPost[];
  // void это тип
  addLikedPost: (post: ILikedPost) => void;
}

// Как класс в питоне
const initialValue: ILikesContext = {
  // Обекты могут иметь методы (Шфункции) и свойства (ключи number, string)
  likedPosts: [],
  // Стрелочная фенкция в обекте, называеться метод
  addLikedPost: () => {},
}

// Создание контекста "контейнера" для хранения 
// likedPosts – список лайкнутых постов
// addLikedPost – функция для добавления поста в список
// Чтобы он заработал, его нужно "заполнить" данными в провайдере и консюмер
export const LikesPostsContext = createContext<ILikesContext>(initialValue)

export function App() {
  // useState создаёт состояние likedPosts массив лайкнутых постов
  const [likedPosts, setLikedPosts] = useState<ILikedPost[]>([])

  useEffect(() => {
    // Загрузка лайкнутых постов из localStorage при загрузке страницы
    const savedPosts = localStorage.getItem("likedPosts")
    if (savedPosts) {
      setLikedPosts(JSON.parse(savedPosts))
    }
  }, [])

  useEffect(() => {
    // Сохранение лайкнутых постов в localStorage 
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts))
  }, [likedPosts])

  const addLikedPost = (post: ILikedPost) => {
    // В React нельзя изменять существующий массив напрямую, 
    // если он находится в состоянии
    // Вытаскивание из масива все елементы
    setLikedPosts([...likedPosts, post])
  }

  return (
    // Провайдер компонент передаёт данные likedPosts, addLikedPost всем компонентам, которые идут дальше
    <LikesPostsContext.Provider value={{ likedPosts, addLikedPost}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/posts" element={<PostsList />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LikesPostsContext.Provider>
  )
}
