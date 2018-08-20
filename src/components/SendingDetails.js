import React, { Component } from 'react';

export default class SendingDetails extends Component {
  render() {
    return (
      <div className="details">
        <div className="details__header">Sending Details</div>
        <div className="details__sending">
          <span>You send</span>
          <span>€2000.00</span>
        </div>
        <div className="details__header">
        <span>Receiving Details</span>
          <a href="#">As of right now 
            <i className="item__icon material-icons icon">help</i>
          </a>
        </div>
        <div className="receiving">
          <div className="receiving__rate"><span>Rate</span><span>0.86022</span></div>
          <div className="receiving__fee"><span>Fee</span><span>£2.50</span></div>
          <div className="receiving__delivery"><span>Delivery date</span><span>25th November</span></div>
          <div className="receiving__recipient"><span>Recipient gets</span><span>£1717.94</span></div>
        </div>
        <div className="details__save-resume">You save £66.19 compared your bank!</div>
      </div>
    );
  }
}

