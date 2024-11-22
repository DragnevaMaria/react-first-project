import {PostList} from "./PostList"

export function App(){
        const posts = [
            {id: 0, title: 'Daniel', description: 'description', 
                picture:'https://th-thumbnailer.cdn-si-edu.com/faJoWtc8qjIHuCadMQ2MKjt6xmo=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/6a/fa/6afa4efa-3f5a-4ea7-90ea-e47173217d59/42-29316901.jpg', author:'author'},
            {id: 1, title: 'Daniel2', description: 'description2', 
                picture:'https://s7d2.scene7.com/is/image/TWCNews/AP21286725279031_crop?wid=767&hei=431&$wide-bg$', author:'author2'}
        ]
        return(
            <div>
                <PostList posts={posts} />
            </div>
        )
}


// Ваша задача реализовать отображения массива постов на 
// вашей странице. 
// Для этого создаете компонент Post, который будет отображать 
// данные о посте: заголовок поста, описание, картинку и автора. 
// Все данные должны передаваться через props(не забываем типизацию).

// Заголовок - тег h1
// описание - тег p
// картинка - тег img
// автор - тег p 

// Компонент Post отвечаете за отображение одного поста. 
// Так как будет постов будет много - вам нужно создать еще один 
// компонент, отвечающий за рендер множества компонентов - PostList. 
// Компонент PostList должен иметь массив с данными о постах и 
// рендерить этот массив. Для каждого элемента вы должны рендерить 
// компонент Post  и передавать в props соответствующие данные.

// Компонент PostList нужно отрендерить в компоненте App
