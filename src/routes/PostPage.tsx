import React, {  useState } from "react";
import { PostsList, SinglePost } from '../components';
import {useNavigate} from "react-router-dom"


const PostPage = () => {

    const [postId, setPostId] = useState(0);
    const navigate = useNavigate()

    const onClickPost = (id: number) => {
        setPostId(id);
        navigate(`/posts/${id}`)
    };

    return (
        <div className="App">
            <h1>Post Page</h1>
            <div className="container">
                <div className="column">
                    <PostsList onClickPost={onClickPost}/>
                </div>
                <div className="column">
                    <SinglePost />
                </div>
            </div>
        </div>
    );
}

export default PostPage
