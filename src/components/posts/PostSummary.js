import React from 'react';

const PostSummary = (props) => {
    const post = props.post;
    return (
        <div className="card z-depth-1 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{post.title}</span>
                <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
                <p className="grey-text">16th October, 1am</p>
            </div>
        </div>
    );
}

export default PostSummary;