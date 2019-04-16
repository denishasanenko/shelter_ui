import { combineReducers } from 'redux';
import {homeReducer}  from './home'
import {aboutReducer} from "./about";

const rootReducer = combineReducers({
    home: homeReducer,
    about: aboutReducer
});

export default rootReducer;
