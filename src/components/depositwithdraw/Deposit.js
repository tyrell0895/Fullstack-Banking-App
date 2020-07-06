import React from "react";
import { connect } from "react-redux";

class Deposit extends React.Component {
  //we are using state in his component hold the input deposit amount until the user
  //clicks confrm.

  render() {
    return (
      <div className="deposit">
        <h2>Deposit</h2>

        {/* Deposit Input */}
        <label>
          Make a deposit:
          <br />
          <input
            type="number"
            className="textfield"
            onChange={e => this.setState({ number: e.target.value })}
          />
        </label>

        <button
          className="mainbtn"
          onClick={amount =>
            this.props.deposit(parseInt(this.state.number, 10))
          }
        >
          Confirm
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance,
    transactionHistory: state.transactionHistory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deposit: amount => dispatch({ type: "deposit", value: amount })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deposit);
