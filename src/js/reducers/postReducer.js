const initialState = {
    posts: [],
    fetching: false,
    fetched: false,
    error: null
};

export default function reducer(state = initialState, action){

    switch(action.type){
        case 'FETCH_POST_FULFILLED':
            return {...state, fetching: false, posts: action.payload.data, fetched: true};
        break;

        case 'FETCH_POST_REJECTED':
            return {...state, fetching: false, error: action.payload}
        break;
    }

    return state;

}
