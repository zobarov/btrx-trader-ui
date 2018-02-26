import {combineReducers} from 'redux';
import {SET_MARKETS, FAVORITE_MARKET} from '../actions';

function markets(state = [], action) {
    switch(action.type) {
        case SET_MARKETS:
            return action.items;
        default:
            return state;
    }
}

function favoriteMarkets(state = [], action) {
    switch(action.type) {
        case FAVORITE_MARKET:
            state = [...state, action.market]
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({markets, favoriteMarkets});

export default rootReducer;