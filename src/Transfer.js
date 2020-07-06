import React, { Component } from "react";
import BankAccount from "./components/transfer/BankAccount";
import Transfers from "./components/transfer/Transfers";
import Header from "./components/Header";

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transferWindowIsHidden: true,
      transferFrom: 0,
      checkingBal: 300,
      savingBal: 2000,
      overseasBal: 100
    };
  }

  displayTransferUI = acc => {
    this.setState({
      transferWindowIsHidden: false,
      transferFrom: acc
    });
  };

  handleTransfer = (from, to, amount) => {
    console.log(from, to, amount);
    if (from === 1) {
      this.setState({ checkingBal: this.state.checkingBal - amount });
    } else if (from === 2) {
      this.setState({ savingBal: this.state.savingBal - amount });
    } else if (from === 3) {
      this.setState({ overseasBal: this.state.overseasBal - amount });
    }

    if (to === 1) {
      this.setState({ checkingBal: this.state.checkingBal + amount });
    } else if (to === 2) {
      this.setState({ savingBal: this.state.savingBal + amount });
    } else if (to === 3) {
      this.setState({ overseasBal: this.state.overseasBal + amount });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <h1>Transfers</h1>
        <center>
          <i class="fa fa-comments fa-5x" />

          <BankAccount
            checking={this.state.checkingBal}
            saving={this.state.savingBal}
            overseas={this.state.overseasBal}
            transfer={this.displayTransferUI}
          />
          <Transfers
            isHidden={this.state.transferWindowIsHidden}
            transferFrom={this.state.transferFrom}
            transfer={this.handleTransfer}
          />
        </center>
      </div>
    );
  }
}
export default Transfer;
