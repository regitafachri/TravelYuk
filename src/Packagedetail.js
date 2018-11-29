import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { packagedetail } from "./action";
import {connect} from 'react-redux'

class Packagedetails extends Component {
    componentDidMount(){
        const { id } = this.props
        this.props.dispatch(packagedetail(id))
    }



  dataDetail = () => {
    const {nama, package, price, image, description} = this.props.data

    const dataOrder = {
        user_id: this.props.id,
        timestamp: Date.now() / 1000 | 0,
        item:[
            {
                name: nama,
                image: image,
                price: price,
                description: description
            }
        ],
        payment_status: 'UNPAID'
    }

    console.log(dataOrder)

    this.props.dispatch(packagedetailPost(dataOrder))
    this.props.navigation.navigate("Cart")
    }

  render() {
    return(
        <View>
            {this.props.data}
            <TouchableOpacity onPress={() => this.dataDetail()}>
                <Text> Add to cart </Text>
            </TouchableOpacity>
        </View>
    )
}
}

const mapStateToProps = (state) => {
    return{
        data : state.packageDetail.items,
        id : state.dataLogin.items.id
    }
}
export default connect(mapStateToProps)(Packagedetails);
