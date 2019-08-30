import React, { Component } from 'react'

export default class Login extends Component {
   constructor(props) {
    super(props);
    this.state = {
      login: true,
      email: "",
      password: "",
      fireErrors: "",
      loginButton: true
    };
  }
  login = e => {
    e.preventDefault();

  };
  register = e => {
    e.preventDefault();

  };
  loginForm = () => {
    this.setState({ login: true });
  };
  signupForm = () => {
    this.setState({ login: false });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const borderBottom = "4px solid #2f3640";
    return (
      <div className="login-registeration">
        <form action="" className="form">
          <div className="form-div form-close">
            <button onClick={this.props.login}>
              X
              </button>
          </div>
          <div className="form-div form-switch">
            <h2
              onClick={this.loginForm}
              style={
                this.state.login ? { borderBottom: borderBottom } : null
              }
            >
              Login
            </h2>
            <h2
              onClick={this.signupForm}
              style={
                !this.state.login ? { borderBottom: borderBottom } : null
              }
            >
              SignUp
            </h2>
          </div>
          <div className="form-div form-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              id="email"
            />
          </div>
          <div className="form-div form-input">
            <label htmlFor="password"> Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              id="password"
            />
          </div>
          <div className="form-div form-submit">
            {this.state.login === true ? (
              <input type="submit" value="login" onClick={this.login} />
            ) : (
              <input
                type="submit"
                value="Register"
                onClick={this.register}
              />
            )}
          </div>
        </form>
      </div>
    );
  }
}

