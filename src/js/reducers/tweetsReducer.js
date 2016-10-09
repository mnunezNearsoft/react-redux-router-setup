const initialState = {
    tweets: [],
    fetching: false,
    fetched: false,
    error: null
};

export default function reducer(state = initialState, action){

    switch(action.type){
        case 'FETCH_TWEETS_PENDING':
            return {...state, fetching: true};
        break;

        case 'FETCH_TWEETS_FULFILLED':
            return {...state, fetching: false, tweets: action.payload, fetched: true};
        break;

        case 'FETCH_TWEETS_REJECTED':
            return {...state, fetching: false, error: action.payload}
        break;
    }

    return state;

}
