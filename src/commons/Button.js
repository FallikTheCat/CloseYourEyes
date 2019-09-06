import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class Button extends Component {
  render() {
    return(
      <TouchableOpacity style={{
        width: width,
        height: height*0.05,
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height*0.01
      }}
      onPress={() => this.props.onPress()}>
      <Text style={{
        color: 'white'
      }}>
      {this.props.text}</Text>

      </TouchableOpacity>
    );
  }
}

export default Button;
