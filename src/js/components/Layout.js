import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './../actions/userActions';
import {fetchTweets} from './../actions/tweetsActions';

@connect((store) => {
    return {
        user: store.userReducer.user,
        userFetching: store.userReducer.fetched,
        userFetched: store.userReducer.fetched,
        tweets: store.tweetsReducer.tweets
    }
})
export default class Layout extends React.Component{

    constructor(props){
        super(props);
        this.loadTweets = this.loadTweets.bind(this);
    }

    loadTweets(){
        this.props.dispatch(fetchTweets());
    }

    componentWillMount(){
        this.props.dispatch(fetchUser());
    }

    render(){

        if(!this.props.tweets.length){

            return (
                <button onClick={this.loadTweets}>Load tweets</button>
            );

        }

        let tweetsFormated = this.props.tweets.map(tweet => (
            <li key={tweet.id}>{tweet.text}</li>
        ));

        return (
            <div>
                <h1>Layout</h1>
                <h2>{this.props.user.name}</h2>
                <ul>
                    {tweetsFormated}
                </ul>
            </div>
        );
    }

}
