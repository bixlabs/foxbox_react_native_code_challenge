/**
 * React Native App
 * Made by Daniel Padilla
 */

import {combineReducers} from 'redux'
import {dialog} from "./dialogReducer";
import {cocktails} from "./cocktailsReducer";

const reducers = combineReducers({
    dialog,
    cocktails
});

export default reducers
