import React from "react";
import posts from "./posts.json"
import PostItem from "./post-item";

const PostList = () => {
    return (
        <>
            {
                posts.map(post => {
                    return(<PostItem key={post._id} post = {post}/>);
                })
            }
        </>
    )
}

export default PostList;