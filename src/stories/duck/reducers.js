import types from './types';

const INITIAL_STATE = {
    stories: []
};
const storiesReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {

        case types.GET_STORIES: {
            console.log(state, action);
            return {
                ...state,
                stories: action.data
            }
        }

        default: return state;
    }
};

export default storiesReducer;
