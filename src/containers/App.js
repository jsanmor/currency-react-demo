import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Tabs } from "../components/Tabs";
import SendingDetails from "../components/SendingDetails";
import Modal from "../components/Modal";
import TransactionInfo from "../components/TransactionInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }        

  renderModal() {
    if (this.state.modal) {
      return (
        <Modal
          onClose={() => this.setState({ modal: false })}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <div className="sidebar">
            <SendingDetails />
        </div>
        <div className="content">
          <div >
            <Tabs>
              <div label="Transaction info">
                <TransactionInfo />
              </div>
              <div label="Recipient info">
                <div className="not-panel">Not available</div>
              </div>
              <div label="Make payment">
                <div className="not-panel">Not available</div>
              </div>
            </Tabs>
          </div>
          <div className="next-btn">
            <button className="btn btn--blue"
              onClick={() => this.setState({ modal: true })} >
              Next
            </button>
          </div>
          <Footer />
        </div>
        {this.renderModal()}
      </div>
    );
  }
}
export default App;
