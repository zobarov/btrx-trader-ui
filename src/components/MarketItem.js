import React, {Component} from 'react';
import {favoriteMarket} from '../actions';
import {connect} from 'react-redux';

class MarketItem extends Component {
    constructor() {
        super();

        this.state = {
            favorited: false
        }
    }

    favorite(market) {
        this.props.favoriteMarket(market);
        this.setState({favorited: true});
    }
    
    render() {
        let {market} = this.props;
        return (
            <div className="market-item">
                {
                    this.props.favoriteButton ?
                        this.state.favorited ?
                            <div className="star">&#9733;</div>
                        : 
                            <div className="star" onClick={() => this.favorite(market)}>
                                        &#9734;
                            </div>
                    :
                        <div></div>
                }


                <div className="market-text">
                    <a href={market.MarketName} >
                        <h4>{market.MarketName}</h4>
                    </a>
                </div>
                
                <img className="market-img" src={market.LogoUrl} alt={market.MarketName} />  
            </div>
            
        )
    }
}

export default connect(null, {favoriteMarket}) (MarketItem);