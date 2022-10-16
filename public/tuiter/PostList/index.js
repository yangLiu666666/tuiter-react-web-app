import posts from './post.js'
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
    ${
        posts.map(post => {
            return(PostItem(post));
        }).join('')
    }`)
}

export default PostList;