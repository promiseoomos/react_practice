import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


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

    const [searchParams, setSearchParams] = useSearchParams();

    const searchString = searchParams.get("search");


    return (
        <div>
            <p>{ searchString == 'Latest' ? 'Latest Posts' : 'All Posts' }</p>

            {
                posts.map((post : Post)  => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            }

            <button onClick={() => setSearchParams({search: 'Latest', page : "1"})}>Latest Posts</button>
            <button onClick={() => setSearchParams({})}>Reset</button>
        </div>
    )
}

export default Posts;