import types from './types.js';

const getStories = (data) => ({
    type: types.GET_STORIES,
    data: data
});

export default {
    getStories
}
