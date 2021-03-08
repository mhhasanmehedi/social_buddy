import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();

        const showComments = id =>{
        const url = `post/${id}`;
        history.push(url);
    }

    return (
        <div style={{border:'2px solid #aaa',margin:'20px',padding:'20px',borderRadius:'10px'}}>
            <h3><strong>Id-{id}: </strong>{title}</h3>
            <p>{body}</p>
            <button onClick={() => showComments(id)}>Show comment</button>
        </div>
    );
};

export default Post;