import React, {Component} from 'react';
import SearchMarkets from './SearchMarkets';
import MarketList from './MarketList';
import '../styles/index.css';

class App extends Component {
    render() {
        return (
            <div>
                <h2> Btrx Trader App </h2>
                <SearchMarkets />
                <MarketList />
            </div>
        )
    }
}

export default App;