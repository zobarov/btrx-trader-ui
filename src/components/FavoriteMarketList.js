import React, { Component } from 'react';
import {connect} from 'react-redux';
import MarketItem from './MarketItem';
import {Link} from 'react-router-dom';

class FavoriteMarketList extends Component {

    render() {
        return (
            <div>
                <h4><Link className="link" to='/'>Home</Link></h4>
                <h4>Favorite Marets: </h4>
            {
                    this.props.favoriteMarkets.map((market, index) => {
                        return (
                            <MarketItem key={index} market={market} favoriteButton={false} />
                        )
                })
            }
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        favoriteMarkets: state.favoriteMarkets
    }
}

export default connect(mapStateToProps, null) (FavoriteMarketList);