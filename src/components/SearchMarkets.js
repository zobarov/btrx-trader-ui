import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import { setMarkets } from '../actions';
import {connect} from 'react-redux';

class SearchMarkets extends Component {
    constructor() {
        super();

        this.state = {
            alts: '',
            baseMarket: ''
        }

        
    }

    search() {
        let { altMarket, baseMarket} = this.state;
        //let param = baseMarket + '-' + altMarket;
        const url = `https://bittrex.com/api/v1.1/public/getmarkets`;

        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.props.setMarkets(json.result); 
        });
    }

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <ControlLabel>Alts</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="XLM,XRP" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Base market</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="ETH" />
                </FormGroup>
                {' '}
                <Button onClick={() => this.search()}>Find</Button>
            </Form>
        )
    }
}

export default connect(null, {setMarkets}) (SearchMarkets);