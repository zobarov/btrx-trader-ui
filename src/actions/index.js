export const SET_MARKETS = 'SET_MARKETS';

export function setMarkets(items) {
    return {
        type: SET_MARKETS,
        items
    }
}