import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './../actions/userActions';

@connect((store) => {
    return {
        user: store.userReducer.user
    }
})
export default class Layout extends React.Component{

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
