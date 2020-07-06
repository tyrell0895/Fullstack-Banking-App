import React, { Component } from "react";
import getAccountName from "./getAccountName";

class Transfers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transferTo: 1,
      amount: 0
    };
  }

  onSelectChange = event => {
    console.log(event.target.value);
    this.setState({
      transferTo: event.target.value
    });
  };

  render() {
    const isHidden = this.props.isHidden;
    if (isHidden) {
      return <div />;
    } else {
      return (
        <div>
          ----------
          <br />
          Transfer UI:
          <div />
          {/* need to convert account number to account name, like getAccName(this.props.transferFrom)*/}
          From:
          {getAccountName(this.props.transferFrom)}
          <br />
          To:
          <select onChange={this.onSelectChange}>
            <option value={1}>Checking</option>
            <option value={2}>Savings</option>
            <option value={3}>Overseas</option>
          </select>
          <br />
          Amount:{" "}
          <input
            onChange={event =>
              this.setState({
                amount: event.target.value
              })
            }
          />
          <br />
          <button
            onClick={() =>
              this.props.transfer(
                this.props.transferFrom,
                parseInt(this.state.transferTo),
                parseInt(this.state.amount)
              )
            }
          >
            Transfer
          </button>
        </div>
      );
    }
  }
}

export default Transfers;
