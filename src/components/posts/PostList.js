import React from 'react';

// Components
import PostSummary from './PostSummary';

const PostList = () => {
    return (
        <div className="post-list section">
            <PostSummary />
            <PostSummary />
            <PostSummary />
            <PostSummary />
        </div>
    );
}

export default PostList;