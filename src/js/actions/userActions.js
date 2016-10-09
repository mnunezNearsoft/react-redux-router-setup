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

}
