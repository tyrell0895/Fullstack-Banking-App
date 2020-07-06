import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    //console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  loginClicked() {
    //hardedcoded authentication
    if (this.state.username === "meritbank" && this.state.password === "pass") {
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
    //console.log(this.state)
  }
  render() {
    return (
      <>
        <div>
          <Router>
            <>
              <Switch>
                <Route path="/welcome/:name" component={WelcomeComponent} />
                <Route path="/" exact component={LoginComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/logout" component={LogoutComponent} />
                <Route path="/accounts" component={AccountComponent} />
                <Redirect to="/account/" />
                <Route component={ErrorComponent} />
              </Switch>
            </>
          </Router>
        </div>
      </>
    );
  }
}

class Connect extends Component {
  render() {
    return (
      <div className="Connect">
        <Router>
          <>
            <Switch>
              <Route path="/welcome/:name" component={WelcomeComponent} />
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/logout" component={LogoutComponent} />
              <Route path="/accounts" component={AccountComponent} />
              <Route component={ErrorComponent} />
            </Switch>
          </>
        </Router>
        {/*<WelcomeComponent />
        <LoginComponent />*/}
      </div>
    );
  }
}

class AccountComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: []
    };
  }
  render() {
    return (
      <div>
        <a href="/logout">logout</a>
        <h4>Account Information</h4>
        <table>
          <thead>
            <tr>
              <p>
                <Link to="/checking">Checking Accounts</Link>
              </p>
              <p>
                <Link to="/savings">Savings Account</Link>
              </p>
              <p>
                <Link to="/cd">Certificate of Deposit Account (CD)</Link>
              </p>
              <Link to="/ira">Individual Retirement Accounts (IRA)</Link>
            </tr>
          </thead>
          <tbody>
            <tr />
          </tbody>
        </table>
      </div>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <>
        <h4>You are logged out</h4>
        <p>Thank You for Using Our Application.</p>
      </>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <Link to="/logout">logout</Link>
        <h4>Welcome!</h4>
        <div>
          {" "}
          Welcome {this.props.match.params.name}. Click here to view your
          Account Information <a href="/account">Go to my account</a>
        </div>
        <div className="container">
          <div>
            <table>
              <thead>
                <tr />
              </thead>
              <tbody>
                <tr />
              </tbody>
            </table>
          </div>
          This is here for testing
          <button
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-success"
          >
            Get Welcome Message
          </button>
        </div>
      </>
    );
  }
}

function ErrorComponent() {
  return <div>An Error Occurred.</div>;
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: true
    };

    /*this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);*/
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    //console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  /* handleUsernameChange(event) {
    console.log(event.target.value);
    this.setState(
      { 
        [event.target.name] 
        :event.target.value
  }
    )
}

  handlePasswordChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  }
*/
  loginClicked() {
    //hardedcoded authentication
    if (this.state.username === "meritbank" && this.state.password === "pass") {
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
    //console.log(this.state)
  }

  render() {
    return (
      <div>
        {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div />}
        {/* <ShowLoginSuccessMessage
          showSuccessMessage={this.state.showSuccessMessage}/>*/}
        <div className="col-sm-2 col-sm-2 center">
          <img
            className="img-fluid d-block mx-auto"
            src="https://github.com/lvdy7114/FrontEndCapstone/blob/master/meritbank/Capstone%20images/malogo.PNG?raw=true"
            alt=""
          />
          <p>Welcome to Merit Online Banking!</p>
        </div>

        <i class="fa fa-id-card fa-5x" />
        <h4>Please Sign-In:</h4>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

//function ShowInvalidCredentials(props) {
// if (props.hasLoginFailed) {
//  return <div>Invalid Credentials</div>;
//}

//return null;
//}

//function ShowLoginSuccessMessage(props) {
//if (props.showSuccessMessage) {
//return <div>Login Successful</div>;
//}

//return null;
//}

export default Connect;
