import React from 'react';
import { Link } from 'react-router';

export default class MainLayout extends React.Component{

    render(){

        return (
            <div style={styles}>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/new-post'>New Post</Link>
                </nav>

                {this.props.children}
                
            </div>
        );
    }

}

const styles = {
    border: '1px solid red'
}
