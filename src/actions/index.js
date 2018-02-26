export const SET_MARKETS = 'SET_MARKETS';
export const FAVORITE_MARKET = 'FAVORITE_MARKET';

export function setMarkets(items) {
    
    return {
        type: SET_MARKETS,
        items
    }
}

export function favoriteMarket(market) {
    return {
        type: FAVORITE_MARKET,
        market
    }
}