import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Notifications from './Notifications';
import PostList from '../posts/PostList';

class Dashboard extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PostList posts={posts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    } 
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps)(Dashboard);
