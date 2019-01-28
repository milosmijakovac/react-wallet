import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import CashInput from "./components/CashInput";

class App extends Component {
  state = {
    amount: 0,
    deposit: null,
    withdraw: null
  };

  addDeposit = cash => {
    let amount = parseInt(cash.deposit)
    this.setState({
      ...this.state,
      deposit: cash.deposit,
      amount 
    });
  };

  
withdrawMoney = cash => {

  this.setState({
    ...this.state,
    withdraw: cash.withdraw,
    amount: this.state.amount - this.state.withdraw
  })
}


  render() {
    return (
      <div className="App">
        <Header />
        <CashInput
         
          addDeposit={this.addDeposit}
          withdrawMoney={this.withdrawMoney}
        />

        <div className="amount">
          <h5>Amount: </h5>
          {this.state.amount}
        </div>
      </div>
    );
  }
}

export default App;
