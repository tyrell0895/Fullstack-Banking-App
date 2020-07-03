import React, { Component } from "react";
import Header from "./components/Header";
import { connect } from "react-redux";
import Deposit from "./components/depositwithdraw/Deposit";

class DepositWithdraws extends Component {
  render() {
    let transactionHistory = (
      <div>
        {this.props.transactionHistory.map(log => {
          return (
            <li>
              {log.transactionType} ${log.amount} | closing balance: $
              {log.newBalance} | {log.date}{" "}
            </li>
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <div>
            {" "}
            <Header />
          </div>
        </header>
        <h1>Deposit and Withdrawals</h1>
        <center>
          <i class="fa fa-comments fa-5x" />
        </center>
        <h1>Balance: {this.props.balance}</h1>

        <div className="atm">
          <h2>Withdrawals</h2>
          <button className="mainbtn" onClick={() => this.props.withdraw(50)}>
            Withdraw $50
          </button>
          <button className="mainbtn" onClick={() => this.props.withdraw(100)}>
            Withdraw $100
          </button>
        </div>

        <Deposit />

        <div>
          <h2>Transaction History</h2>
          {transactionHistory}
        </div>
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
    //in last app values were hard coded, now we pass a payload depending on which button is clicked
    withdraw: amount => dispatch({ type: "withdraw", value: amount })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositWithdraws);
