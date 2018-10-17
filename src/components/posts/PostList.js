import React from 'react';

// Components
import PostSummary from './PostSummary';

const PostList = (props) => {
    const posts = props.posts;

    return (
        <div className="post-list section">
            {posts && posts.map(post => {
                return (
                    <PostSummary post={post} key={post.id}/>
                );
            })}
        </div>
    );
}

export default PostList;