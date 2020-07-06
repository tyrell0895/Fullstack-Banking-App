import React, { Component } from "react";

class BankAccount extends Component {
  render() {
    return (
      <div>
        Checking: {this.props.checking}
        <button onClick={() => this.props.transfer(1)}>Transfer</button>
        <br />
        Saving: {this.props.saving}
        <button onClick={() => this.props.transfer(2)}>Transfer</button>
        <br />
        Overseas: {this.props.overseas}
        <button onClick={() => this.props.transfer(3)}>Transfer</button>
      </div>
    );
  }
}

export default BankAccount;
