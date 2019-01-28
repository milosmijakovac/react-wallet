import React, { Component } from "react";

class CashInput extends Component {
  state = {
    deposit: null,
    withdraw: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };



  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.calculateAmount(this.state)
  // };

  handleDeposit = (e) => {
    e.preventDefault();
    this.props.addDeposit(this.state)
    
  }

  handleWithdraw = e => {
    e.preventDefault();
    this.props.withdrawMoney(this.state)
   
  }

  render() {
    return (
      <div className="input">

        <form>
        
       
          <label htmlFor="deposit">Deposite: </label>
          <input type="number" id="deposit" onChange={this.handleChange} />
          <button onClick={this.handleDeposit}>Deposit</button>
          
          <br/>
          <label htmlFor="withdraw">Withdraw: </label>
          <input type="number" id="withdraw" onChange={this.handleChange} />
          <button onClick={this.handleWithdraw}>Withdraw</button>
          
          <br/>
          
        </form>
         
      </div>
    );
  }
}

export default CashInput;
