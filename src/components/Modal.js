import React, { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
      valid: false
    };
  }

  //Check number and length = 1
  handlechange = event => {
    var value = event.target.value;
    var valueName = event.target.name;
    this.setState(state => {
      if (value.length <= 1 && !isNaN(Number(value)) && { value }) {
        this.setState({[valueName]:value},this.validateForm, this.foucusNext)
      } else return state;
    });
  };
  validateForm(){
    //console.log("valida "+this.state.code1)
    this.setState({valid:
        this.state.code1 && 
        this.state.code2 && 
        this.state.code3 && 
        this.state.code4 && 
        this.state.code5 && 
        this.state.code6})

  }
  foucusNext(event) {
    console.log("nextt")
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  render() {
    const { onClose } = this.props;
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <span className="modal-header__title">
              <i className="item__icon material-icons icon">lock</i>
              Identity verification required
            </span>
            <span className="modal-header__subtitle">
              For your security, we ocassionally require you to verify your
              identity by entering a code sent to your mobile device.
            </span>
          </div>
          <div className="modal-content">
            <div className="modal-content__number">
              <span>Enter the code sent via SMS to </span>
              <div className="phone-number">
                <div className="phone-number__number-prefix">+356</div>
                <div className="phone-number__number-other">65654865</div>
              </div>
            </div>
            <form className="modal-code">
              <input
                value={this.state.code1}
                name="code1"
                onChange={this.handlechange}
                type="number"
                maxLength="1"
                min="0"
                max="9"
              />
              <input
                value={this.state.code2}
                name="code2"
                onChange={this.handlechange}
                type="number"
                maxLength="1"
                min="0"
                max="9"
              />
              <input
                value={this.state.code3}
                name="code3"
                onChange={this.handlechange}
                type="number"
                maxLength="1"
                min="0"
                max="9"
              />
              <input
                value={this.state.code4}
                name="code4"
                onChange={this.handlechange}
                type="number"
                maxLength="1"
                min="0"
                max="9"
              />
              <input
                value={this.state.code5}
                name="code5"
                onChange={this.handlechange}
                type="number"
                maxLength="1"
                min="0"
                max="9"
              />
              <input
                value={this.state.code6}
                name="code6"
                onChange={this.handlechange}
                type="number"
                maxLength="1"
                min="0"
                max="9"
              />
            </form>
            <div className="modal-links">
              <a className="link " href="#">
                <i className="item__icon material-icons icon">replay</i>
                Receive a new code
              </a>
              <a className="link" href="#">
                <i className="item__icon material-icons icon">phone</i>
                Receive code via call instead
              </a>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn--blue" disabled={!this.state.valid} onClick={() => onClose()}>
              Verify Identity
            </button>
            <button className="btn btn--white" onClick={() => onClose()}>
              Back
            </button>
            <a href="#" className="link link--blue">
              I can't access this mobile device
            </a>
          </div>
        </div>
      </div>
    );
  }
}
