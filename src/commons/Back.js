import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Dimensions,
Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Sound from 'react-native-sound';

const sleep = new Sound('sleep.mp3', Sound.MAIN_BUNDLE);
const hink = new Sound('hink.mp3', Sound.MAIN_BUNDLE);
const sleepp = new Sound('sleep1.mp3', Sound.MAIN_BUNDLE);

const { width, height } = Dimensions.get('window');

class Back extends Component {
  render() {

    return(
      <TouchableOpacity style={{
        width: width*0.2,
        height: height*0.1,
        justifyContent: 'center',
        marginTop: height*0.01
      }}
      onPress={() => Actions.Main(sleep.stop(), hink.stop(),sleepp.stop())}>
        <Image
        style={{
        width: width*0.2,
        height: height*0.1
        }}
        source={require('../img/back.png')}
        />

      </TouchableOpacity>
    );
  }
}

export default Back;
