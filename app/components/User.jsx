import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

const User = React.createClass({
  getInitialState() {
    return {
      login: {
        email: '',
        password: ''
      },
      reg: {
        email: '',
        password: '',
        confirm: ''
      }
    };
  },

  handleRegister(event) {
    event.preventDefault();

    const reg = {
      email: this.state.reg.email,
      password: this.state.reg.password
    };

    axios.post('/api/users', reg)
    .then(() => {
      axios.post('/api/token', reg);
    })
    .then(() => {
      browserHistory.push('/');
    })
    .catch((err) => {
      console.error(err);
    });
  },

  handleLogin(event) {
    event.preventDefault();

    const login = this.state.login;

    axios.post('/api/token', login)
    .then(() => {
      browserHistory.push('/');
    })
    .catch((err) => {
      console.error(err);
    });
  },

  handleLogout(event) {
    event.preventDefault();

    axios.delete('/api/token')
    .then(() => {
      const newLogin = Object.assign(
        {},
        this.state.login,
        { email: '', password: '' }
      );
      const newReg = Object.assign(
        {},
        this.state.login,
        { email: '', password: '', confirm: '' }
      );

      this.setState({ login: newLogin, reg: newReg });
      browserHistory.push('/');
    })
    .catch((err) => {
      console.error(err);
    });
  },

  handleTextChange(event) {
    const target = event.target.name.split('.')[0];
    const name = event.target.name.split('.')[1];

    const nextUser = Object.assign({}, this.state[target], {
      [name]: event.target.value
    });

    this.setState({ [target]: nextUser });
  },

  render() {
    let loginBody;

    if (document.cookie) {
      loginBody = <button onClick={this.handleLogout}>Logout</button>;
    }
    else {
      loginBody = <div className="formcontainer">
        <form className="loginform">
          <input
            name="login.email"
            onChange={this.handleTextChange}
            placeholder="Email"
            type="text"
          />
          <input
            name="login.password"
            onChange={this.handleTextChange}
            placeholder="Password"
            type="password"
          />
          <button onClick={this.handleLogin}>Login</button>
        </form>
        <form className="regform">
          <input
            name="reg.email"
            onChange={this.handleTextChange}
            placeholder="Email"
            type="text"
          />
          <input
            name="reg.password"
            onChange={this.handleTextChange}
            placeholder="Password"
            type="password"
          />
          <input
            name="reg.confirm"
            onChange={this.handleTextChange}
            placeholder="Confirm Password"
            type="password"
          />
          <button onClick={this.handleRegister}>Submit</button>
        </form>
      </div>;
    }

    return <div className="usercontainer">
      {loginBody}
    </div>;
  }
});

export default User;
