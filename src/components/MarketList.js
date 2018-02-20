import React, {Component} from 'react';
import {connect} from 'react-redux';

class MarketList extends Component {
    render() {
        console.log('this.props', this.props);

        return(
            <div>
                {
                    this.props.markets.map((market, index) => {
                        return (
                            <div key={index}>
                                <h4>{market.MarketName}</h4>
                            </div>
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