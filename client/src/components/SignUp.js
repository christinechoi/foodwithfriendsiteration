import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    });
  }

  handleSubmit(e) {
    console.log('HANDLE SUBMIT', e.target);
    e.preventDefault();
  }

  render() {
    return (
      <div className="sign-up-container">
        <form className="flex-form" onSubmit={this.handleSubmit} >
        <label>
          User Name:
          <input 
          type="text" 
          value={this.state.value} 
          name="username"
          onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input 
          type="text" 
          value={this.state.value} 
          name="password"
          onChange={this.handleChange} />
        </label>

        <label>Pick your favorite cuisine: 
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        </label>
        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />

          <div className="split-form">Email:<input type="text" /></div>
          <div className="split-form">Password:<input type="text" /></div>
          <div className="button bg-blue">Sign Up</div>
        </form>  
      </div>
    )
  }
}

export default SignUp;