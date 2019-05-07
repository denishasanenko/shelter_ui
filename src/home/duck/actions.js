import types from './types.js';

const getHomeShelters = (data) => ({
    type: types.GET_HOME_SHELTERS,
    data: data
});

const incrementCount = (value) => ({
    type: types.INCREMENT_COUNT,
    value: value
});

const decrementCount = (value) => ({
    type: types.DECREMENT_COUNT,
    value: value
});

const requestSubredditJson = (subreddit) => ({
    type: types.REQUEST_SUBREDDIT_JSON,
    subreddit: subreddit
});
const receiveSubredditJson = (json) => ({
    type: types.RECEIVE_SUBREDDIT_JSON,
    subredditData: json
});

export default {
    getHomeShelters,
    incrementCount,
    decrementCount,
    requestSubredditJson,
    receiveSubredditJson
}
