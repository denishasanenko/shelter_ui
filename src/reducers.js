import { combineReducers } from 'redux';
import {homeReducer}  from './home'
import {aboutReducer} from "./about";
import {petsReducer} from "./pets";
import {storiesReducer} from "./stories";

const rootReducer = combineReducers({
    home: homeReducer,
    about: aboutReducer,
    pets: petsReducer,
    stories: storiesReducer
});

export default rootReducer;
