//blocking
// const fetchDataNoBlocking = () => {
//     return new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => {
//             console.log("promesa resuelta")
//             resolve(data)})
//         console.log("fin del bloque")
//     });   

import Favorite from "@/components/Favorite";

// }
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
};
interface Post {
    id: number,
    title: string,
    body: string
}
const Posts = async () => { 
    const result = await fetchData();
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Post</h1>
            <div className="flex flex-col">
                {result.slice(0, 10).map((post: Post) => (
                    <div key={post.id} className="flex flex-col border-2 border-gray-300 rounded-lg p-4 m-4">
                        <h3 className="text-xl font-bold">{post.title}</h3>
                        <p>{post.body}</p>
                        <Favorite />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Posts