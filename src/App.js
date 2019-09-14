import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Reducers from "./Redux/Reducers";
import Routes from "./Routes/Routes";
import thunk from "redux-thunk";

class App extends React.Component {
  render() {
    const store = createStore(Reducers, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
