import axios from "axios";
import { useEffect, useState } from "react";


export interface Post {
    id : number,
    title: string,
    body: string
}
const Posts = () => {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        async function fetchPosts(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

            setPosts(response.data);
        }

        fetchPosts();
    }, [])

    return (
        <div>
            <p>All Posts</p>

            {
                posts.map((post : Post)  => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}

export default Posts;