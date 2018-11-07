import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PostSummary from './PostSummary';

const PostList = (props) => {
    const posts = props.posts;

    return (
        <div className="post-list section">
            {posts && posts.map(post => {
                return (
                    <Link to={'/post/' + post.id}>
                        <PostSummary post={post} key={post.id} />
                    </Link>
                );
            })}
        </div>
    );
}

export default PostList;