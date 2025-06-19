import { useParams } from "react-router-dom";


const PostDetail = () => {

    const params = useParams();
    const postId = params.postId;

    console.log(params)

    return (
        <div>
            <p>Post Details of Post {postId}</p>
        </div>
    )
}

export default PostDetail;