import React, {Component} from 'react';
import {connect} from 'react-redux';
import MarketItem from './MarketItem';
import {Link} from 'react-router-dom';

class MarketList extends Component {
    render() {
        console.log('this.props', this.props);
        return(
            <div>
                {
                    this.props.favoriteMarkets.length > 0 ?
                        <h4><Link className="link" to='/favorites'>Favorites </Link></h4>
                    :
                    <div></div>
                }

                {
                    this.props.markets.map((market, index) => {
                        return (
                            <MarketItem key={index} market={market} favoriteButton = {true}/>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null) (MarketList);