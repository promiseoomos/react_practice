import axios from "axios";
import { useEffect, useState } from "react";

export interface Post {
  id: number;
  title: string;
  body: string;
}

// export interface Error {
//     message : string,
// }
const PostsListWOReducer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function fetchPosts() {

      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(response.data);
        setLoading(false)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error?.message);
        }

        setLoading(false)
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <p>All Posts</p>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        posts.map((post: Post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default PostsListWOReducer;
