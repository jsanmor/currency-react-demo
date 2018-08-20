import React, { Component } from 'react';
import {currencies} from '../utils';

export default class CurrencyLabel extends Component {
  render() {
    const {
        props: {coin},
      } = this;
    let currency = currencies[coin];
    return (        
      <div className="currency">
        <figure>
            <img src={currency.img} alt={currency.code}title={currency.code}></img>
        </figure>
        <span>{currency.code}</span>
      </div>
    );
  }
}

