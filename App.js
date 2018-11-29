import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Login from './src/Login'
import Signup from './src/Signup'
import TravelPackage from './src/TravelPackage'
import Packagedetails from './src/Packagedetail'
import Cart from './src/Cart'
import Terimakasih from './src/Terimakasih'
import { Provider } from "react-redux";

const BaseRoutes = StackNavigator(
  {
    Login: Login,
    Signup: Signup,
    TravelPackage: TravelPackage,
    Packagedetails: Packagedetails,
    Cart:Cart,
    Terimakasih: Terimakasih
  },
  {
    initialRouteName: "Login"
  }
);

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BaseRoutes />
      </Provider>
    );
  }
}
export default App;
