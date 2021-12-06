import React, {Component} from "react";
import signimg from "../../Images/girl.jpg";
import "./Signup.css";
import axios from "axios";

export default class Signup extends Component {
  constructor(prop) {
    super(prop);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      pass: "",
    };
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ pass: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const ob = {
      username: this.state.username,
      email: this.state.email,
      pass: this.state.pass,
    };
    //console.log(ob);
    axios
      .post("http://localhost/funwithscience/insert.php", ob)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
      email: "",
      pass: "",
    });
  }

  render() {
    return (
      <div className="signup">
        <div className="signmain">
          <figure>
            <img src={signimg} alt="" className="signimg" />
            <p className="figtext">
              Designed by <a href="https://www.freepik.com/">Freepik</a>
            </p>
          </figure>
          <form onSubmit={this.onSubmit}>
            <p className="signhead">Sign Up</p>
            <div className="signdiv">
            <span><i class="fas fa-user"></i></span>
            <input
              type="text"
              className="forminput fontAwesome"
              name="username"
              placeholder="Username"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            </div>
            <div className="signdiv">
            <span><i class="fas fa-envelope"></i></span>
            <input
              type="email"
              className="forminput fontAwesome"
              name="email"
              autoComplete="off"
              placeholder="Email"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            </div>
            <div className="signdiv">
            <span><i class="fas fa-key"></i></span>
            <input
              type="password"
              className="forminput fontAwesome"
              name="pass"
              placeholder="Password"
              required
              value={this.state.pass}
              onChange={this.onChangePassword}
            />
            </div>
            <button type="submit" className="btn btn-primary signupbtn">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}