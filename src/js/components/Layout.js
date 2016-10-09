import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './../actions/userActions';

/* Used to bind from the store.reducer to props */
@connect((store) => {
    return {
        user: store.userReducer.user,
        userFetching: store.userReducer.fetched,
        userFetched: store.userReducer.fetched,
    }
})
export default class Layout extends React.Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.dispatch(fetchUser());
    }

    render(){

        return (
            <div>
                <h1>Layout</h1>
                <h2>{this.props.user.name}</h2>
            </div>
        );
    }

}
