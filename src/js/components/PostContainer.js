import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './../actions/postActions';

/* Used to bind from the store.reducer to props */
@connect((store) => {
    return {
        posts: store.postReducer.posts,
        postsFetching: store.postReducer.fetching,
        postsFetched: store.postReducer.fetched,
    }
})
export default class PostContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    componentWillMount(){
        console.log('PROPS: ', this.props.posts);
        this.props.dispatch(fetchPosts());
    }

    componentWillReceiveProps(updatedProps){
        console.log('UPDATED PROPS');
        this.setState({posts: updatedProps.posts});

    }

    render(){
        return React.cloneElement(this.props.children, { posts: this.state.posts });
    }

}
