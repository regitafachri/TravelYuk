import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { cart } from "./action";
import { connect } from "react-redux";

class Cart extends Component {
  componentDidMount() {
    this.props.dispatch(cart());
  }
  render() {
    return (
      <View>
        {this.props.dataCart}
        <TouchableOpacity>
          <Text> Bayar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataCart: state.cart.items
  };
};
export default Cart;
