import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { login } from "./action/index";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      Password: ""
    };
  }

  sendData = () => {
    const { email, Password } = this.state;
    console.log("logiiiin");
    this.props.dispatch(login(email, Password));
    this.props.navigation.navigate("TravelPackage");
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Email"
          onChangeText={txt => this.setState({ email:txt })}
        />
        <TextInput
          placeholder="Password"
          onChangeText={txt => this.setState({ Password:txt})}
        />
        <TouchableOpacity onPress={() => this.sendData()}>
          <Text> Log in </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text> Signup </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Login);
