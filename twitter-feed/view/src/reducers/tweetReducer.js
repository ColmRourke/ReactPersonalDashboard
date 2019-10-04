import { FETCH_TWEETS } from '../actions/types'

const initialState = {
    
    tweets : []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TWEETS:
            return {
                ...state,
                tweets: action.payload
            }
        default:
            return state
    }
}