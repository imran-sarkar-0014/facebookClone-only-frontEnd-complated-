import React from 'react'
import './post.css'

//
import PostBody from '../PostBody/PostBody'
import Comment from '../Comment/Comment'
import CommentBox from '../CommentBox/CommentBox'




const Post = () => {
    return (
        <div className="post">
            <PostBody />
            <Comment />
            <CommentBox />
        </div>

    )
}

export default Post