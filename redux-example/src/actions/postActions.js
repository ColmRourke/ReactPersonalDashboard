import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch => {//function in a function
        
        fetch('https://jsonplaceholder.typicode.com/posts')//same as axios
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));

    
}

export const createPost = postData => dispatch => {//takes in post to submit
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST',
        headers : {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    }).then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }))


}