import React from 'react';

export default class PostList extends React.Component{

    render(){
        return (
            <div>
                <h2>Post List</h2>
                {this._displayPosts()}
            </div>
        );
    }

    _displayPosts(){
        return this.props.posts.map(post => (
            <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </li>
        ));
    }
    
}
