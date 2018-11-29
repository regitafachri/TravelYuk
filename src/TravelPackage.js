import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { travelPackage } from "./action";
import {connect} from 'react-redux'

class Travel extends Component {
  componentDidMount() {
    this.props.dispatch(travelPackage());
  }

  render() {
    return (
      <View>
        {this.props.dataTravel.map((data, idx) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate("packageDetail", {id: data.id})}>
             <Image source={{ uri: data.image }} />
            <Text>{data.name}</Text>
            <Text>{data.package}</Text>
            <Text>{data.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataTravel: state.travelPackage.items,
  };
};
export default connect(mapStateToProps)(Travel);
