import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {value: ''}
=======
    this.state = {
      username: '',
      email: '',
      password: '',
      cuisine: ''
    }
>>>>>>> f00fe6c889f756f8e876ccc33d2aca3e76c50c8b
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
<<<<<<< HEAD
    console.log('HANDLE SUBMIT', e.target);
    e.preventDefault();
=======
    e.preventDefault();
    const {username, email, password, cuisine} = e.target 
    console.log('IN HANDLE SUBMIT', username.value, email.value, password.value, cuisine.value);
    fetch('/sign-up', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        cuisine: e.target.cuisine.value
      })
    }).then(res => {
      console.log('FETCH FIRST THEN');
      console.log(res);
    }).then(res => {
      console.log('FETCH SECOND THEN');
      // if (res.status === 200) {
      //   history.push('/download');
      // }
    });
>>>>>>> f00fe6c889f756f8e876ccc33d2aca3e76c50c8b
  }

  render() {
    return (
      <div className="sign-up-container">
        <form className="flex-form" onSubmit={this.handleSubmit} >
<<<<<<< HEAD
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
=======
        <label> Username: </label>
        <input 
          type="text" 
          value={this.state.value} 
          name="username"
          onChange={this.handleChange} 
        />
        <label> Email: </label>
        <input 
          type="text" 
          value={this.state.value} 
          name="email"
          onChange={this.handleChange} 
        />
        <label> Password: </label>
        <input 
          type="text" 
          value={this.state.value} 
          name="password"
          onChange={this.handleChange} 
        />
        <label>Pick your favorite cuisine: </label>
        <select 
          name="cuisine" 
          value={this.state.value} 
          onChange={this.handleChange}>
            <option value="greek">Greek</option>
            <option value="colombian">Colombian</option>
            <option value="ethiopian">Ethiopian</option>
            <option value="english">English</option>
            <option value="nepalese">Nepalese</option>
            <option value="laotian">Laotian</option>
        </select>
        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
>>>>>>> f00fe6c889f756f8e876ccc33d2aca3e76c50c8b
        </form>  
      </div>
    )
  }
}


export default SignUp;