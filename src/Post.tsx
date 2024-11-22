
// Ваша задача реализовать отображения массива постов на 
// вашей странице. 
// Для этого создаете компонент Post, который будет отображать 
// данные о посте: заголовок поста, описание, картинку и автора. 
// Все данные должны передаваться через props(не забываем типизацию).

// Заголовок - тег h1
// описание - тег p
// картинка - тег img
// автор - тег p 

export interface IPostProps{
    title: string,
    description: string,
    picture: string,
    author: string,
    children?: React.ReactNode
}

export function Post(props:IPostProps){
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.picture} alt="" />
            <p>{props.author}</p>
        </div>
    )
}
