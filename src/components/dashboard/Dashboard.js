import React, { Component } from 'react';

// Components
import Notifications from './Notifications';
import PostList from '../posts/PostList';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PostList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
