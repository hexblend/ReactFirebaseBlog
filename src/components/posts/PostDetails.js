import React from 'react';

const PostDetails = (props) => {

    const post_id = props.match.params.id;
    
    return (
        <div className="container section post-details">
            <div className="card z-depth-1">
                <div className="card-content">
                    <span className="card-title">Post Title - {post_id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur aperiam deserunt ab. In ea ut fuga repellat totam! Non mollitia delectus maxime voluptate. Consequuntur facere ut sunt vel quaerat.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Vlad Bibire</div>
                    <div>16th October, 1am</div>
                </div>
            </div>
        </div>
    );
}

export default PostDetails;