import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      Password: ""
    };
  }

  SendDataRegister = () => {
    console.log("haloooooooo");
    const { email, Password } = this.state;
    this.props.dispatch(register(email, Password));
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View>
        <TextInput placeholder="Email" onChangeText={(txt) => this.setState({email:txt})}/>
        <TextInput placeholder="Password" onChangeText={(txt) => this.setState({Password:txt})}/>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.SendDataRegister()}>
          <Text> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Signup);
