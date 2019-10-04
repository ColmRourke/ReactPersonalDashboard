import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchTweets } from '../actions/tweetActions';
import { connect } from 'react-redux';

class TweetList extends Component {

    componentWillMount(){
        this.props.fetchTweets();
    }

    render() {
        const tweetList = this.props.tweets.map(tweet => (
            <div key={tweet.id}>
                <h3>
                    {tweet.body}
                </h3>
            </div>
        ))
        return (
            <div>
                {tweetList}
            </div>
        )
    }
}

TweetList.propTypes = { 
    fetchTweets: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tweets : state.recievedTweets.tweets
})

export default connect(mapStateToProps, { fetchTweets })(TweetList);