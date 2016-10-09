import axios from 'axios';

export function fetchTweets(){

    return function(dispatch){
        dispatch({
            type: 'FETCH_TWEETS',
            payload: axios.get('http://localhost:8000/api/tweets.php')
        });
    }

}
