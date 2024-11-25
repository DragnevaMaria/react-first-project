import {Post} from "./Post"

export function PostsList() {
    const posts = [
        {id: 0, title: 'Daniel', 
            description: 'description', 
            picture:'https://th-thumbnailer.cdn-si-edu.com/faJoWtc8qjIHuCadMQ2MKjt6xmo=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/6a/fa/6afa4efa-3f5a-4ea7-90ea-e47173217d59/42-29316901.jpg', 
            author:'author'},
        {id: 1, title: 'Илья Булкин', 
            description: 'description2', 
            picture:'https://s7d2.scene7.com/is/image/TWCNews/AP21286725279031_crop?wid=767&hei=431&$wide-bg$', 
            author:'author2'},
        {id: 2, title: 'Valera Glazunov', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2018/11/Snapseed-1-768x512.jpg', 
            author:'author3'},
        {id: 3, title: 'Сема', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2018/04/Siberian-tiger-768x512.jpg', 
            author:'author4'},
        {id: 4, title: 'Денис', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2020/01/leopard-walking-768x512.jpg', 
            author:'author5'},
        {id: 5, title: 'yehor honcharov', 
            description: 'description', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2018/11/Snapseed-1-768x512.jpg', 
            author:'author'},

        {id: 6, title: 'Назар Зозуля', 
            description: 'description2', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2019/05/Snow-leopard-AdobeStock_243151027-570x380.jpg', 
            author:'author2'},
        {id: 7, title: 'Serj Roman', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2019/06/Clouded-leopard-AdobeStock_177858806-768x512.jpg', 
            author:'author3'},
        {id: 8, title: 'Даня', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2020/05/Asiatic-golden-cat-Flikr-creative-commons-768x512.jpg', 
            author:'author4'},
        {id: 9, title: 'Богдан Рубанов', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2020/01/serval-768x513.jpg', 
            author:'author5'},
        {id: 10, title: 'Панасенко Діана', 
            description: 'description', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2018/04/Caracal-570x380.jpg', 
            author:'author'},

        {id: 11, title: 'Rinat', 
            description: 'description2', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2018/05/DSC_0731-570x380.jpg', 
            author:'author2'},
        {id: 12, title: 'Антон Примуш', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2019/04/oncilla-AdobeStock_128887437-570x380.jpg', 
            author:'author3'},
        {id: 13, title: 'Dima Pysmennyi', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2018/04/Bobcat-in-the-snow-570x380.jpg', 
            author:'author4'},
        {id: 14, title: 'Миша', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2020/05/Eurasian-lynx-AdobeStock_246336076-768x512.jpg', 
            author:'author5'},
        {id: 15, title: 'Kemilli', 
            description: 'description', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2020/05/Bobcat-AdobeStock_177846262-768x512.jpg', 
            author:'author'},

        {id: 16, title: 'Vanya Kratenko', 
            description: 'description2', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2020/01/two-cheetahs-768x512.jpg', 
            author:'author2'},
        {id: 17, title: 'Илья Булкин', 
            description: 'description2', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2020/05/Black-footed-cat-AdobeStock_121247249-768x513.jpg', 
            author:'author2'},
        {id: 18, title: 'Daniel3', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2018/04/Sand-cat-570x380.jpg', 
            author:'author3'},
        {id: 19, title: 'Daniel3', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2018/03/African-wild-cat-570x380.jpg', 
            author:'author4'},
        {id: 20, title: 'Daniel3', 
            description: 'description3', 
            picture:'https://www.thewildlifediaries.com/wp-content/uploads/2020/05/European-wild-cat-AdobeStock_164919121-768x512.jpg', 
            author:'author5'},
    ]
    return (
        <div>
            {posts.map((post) => (
                <Post 
                    key = {post.id}
                    title={post.title} 
                    description={post.description} 
                    picture={post.picture} 
                    author={post.author}>
                </Post>
            ))}
        </div>
    )
}

// export function PostList(){
//     const posts = [
//         {id: 0, title: 'Daniel', description: 'description', 
//             picture:'https://th-thumbnailer.cdn-si-edu.com/faJoWtc8qjIHuCadMQ2MKjt6xmo=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/6a/fa/6afa4efa-3f5a-4ea7-90ea-e47173217d59/42-29316901.jpg', author:'author'},
//         {id: 1, title: 'Daniel2', description: 'description2', 
//             picture:'https://s7d2.scene7.com/is/image/TWCNews/AP21286725279031_crop?wid=767&hei=431&$wide-bg$', author:'author2'}
//     ]
//     return(
//         <div>
//             {posts.map( (post) => {
//                 // key - уникальный ключ используется при рендере массивов
//                 // нужен для идентифицирования reactом элементов которые отображаются
//                     // <img src="" alt="" />
//                 return <Post 
//                 title={post.title} 
//                 description={post.description} 
//                 picture={post.picture} 
//                 author={post.author}>
//                 </Post>
//             }
//             )}
//         </div>
//     )
// }