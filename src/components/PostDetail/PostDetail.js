import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    let { postId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${ postId }`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])
    return (
        <div style={{margin:'30px',padding:'20px',border:'2px solid #aaa',borderRadius:'10px'}}>
            <h3>This is post details {postId}</h3>
            <p>User posted: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Post Body: {post.body}</p>
            <p>Number of comment: {comment.length}</p>
            {
                comment.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;