import {combineReducers} from 'redux';
import {SET_MARKETS} from '../actions';

function markets(state = [], action) {
    switch(action.type) {
        case SET_MARKETS:
            return action.items;
        default:
            return state;
    }
}

const rootReducer = combineReducers({markets});

export default rootReducer;