import { combineReducers } from 'redux';
import tweetReducer from './tweetReducer'
export default combineReducers ({
    "recievedTweets" : tweetReducer
});