/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useReducer } from "react";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface State {
    posts : Post[],
    error : string,
    loading : boolean
}

type Action =
  | { type: 'success'; data: any[] }
  | { type: 'error'; message: string };

const initialState : State = {
    posts : [],
    error: "",
    loading: false
}




const PostsListWReducer = () => {

const reducer = (state : State, action : Action) => {

    switch(action.type){
        case "success":
            return {
                loading : false,
                posts: action.data,
                error: ""
            }
        case "error":
            return {
                loading: false,
                posts: [],
                error: action.message
            }
        default:
            return state
    }
}

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchPosts() {

      try {
        // setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        dispatch({ type : "success", data: response.data })
        // setPosts(response.data);
        // setLoading(false)
      } catch (error: unknown) {
        if (error instanceof Error) {
        //   setError(error?.message);
        }
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <p>All Posts</p>

      {state.loading ? (
        <p>Loading...</p>
      ) : state.error ? (
        <p>{state.error}</p>
      ) : (
        state.posts.map((post: Post) => (
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

export default PostsListWReducer;
