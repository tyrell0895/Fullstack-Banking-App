import React from "react";
import Home from "./Home.js";
import Account from "./Account.js";
import DepositWithdraws from "./DepositWithdraws.js";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Register } from "./components/login/index";
import Checking from "./Checking.js";
import Savings from "./Savings.js";
import Cd from "./Cd";
import Ira from "./Ira";
import Transfer from "./Transfer";
import reducer from "./components/depositwithdraw/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

//Here we create our store
//A store holds the whole state tree of the application
const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/account" exact component={Account} />
          <Route path="/depositwithdraws" exact component={DepositWithdraws} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/checking" component={Checking} />
          <Route path="/savings" component={Savings} />
          <Route path="/cd" component={Cd} />
          <Route path="/ira" component={Ira} />
          <Route path="/transfer" component={Transfer} />
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
