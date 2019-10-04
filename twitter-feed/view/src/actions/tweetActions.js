import { FETCH_TWEETS } from './types';
import axios from 'axios'
export const fetchTweets = () => dispatch => {

    axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=TwitterAPI&count=2')//same as axios
        .then(res => res.json())
        .then(res => console.log(res))
        .then(recievedTweets => dispatch({
            type: FETCH_TWEETS,
            payload: recievedTweets
        }));
}