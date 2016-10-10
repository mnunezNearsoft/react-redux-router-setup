import axios from 'axios';

export function fetchUser(){

    return {
        type: 'FETCH_USER_FULFILLED',
        payload: {
            id: 0,
            name: 'Marco',
            age: 25
        }
    };

    /*
        async action

        return function(dispatch){
            dispatch({
                type: 'FETCH_USER',
                payload: axios.get('my-url-to-fetch')
            });
        }
    */

}

export function fetchPosts(){

    return function(dispatch){
        dispatch({
            type: 'FETCH_POST',
            payload: axios.get('https://jsonplaceholder.typicode.com/posts')
        });
    }

}
