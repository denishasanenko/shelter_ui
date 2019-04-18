import Creators from './actions';

const getStories = () => {
    return async dispatch => {
        const list = await fetch('/mocks/stories.json')
            .then(response => { return response.json(); });
        return dispatch(Creators.getStories(list));

    }
};

export default {
    getStories
}
