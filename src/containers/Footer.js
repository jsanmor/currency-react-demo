import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (        
      <footer className="footer">
      <span>@2016 CurrencyFair</span>
      <div className="footer__right">
        <a src="#">Help & Support</a>
        <a src="#">Legal Stuff</a>
      </div>
    </footer>
    );
  }
}

