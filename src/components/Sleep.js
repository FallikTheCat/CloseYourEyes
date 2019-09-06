import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import Sound from 'react-native-sound';

const sleep = new Sound('sleep.mp3', Sound.MAIN_BUNDLE);

import Back from '../commons/Back';

const { width, height } = Dimensions.get('window');

class Sleep extends Component {
  render() {

    sleep.play()

    return(

      <ImageBackground
      style={{ width, height }}
      source={require('../img/sleep.png')}>

      <Back />

      <View style={{
        flex: 0.9,
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
      <Text>Sleep</Text>
      </View>

      </ImageBackground>
    );
  }
}

export default Sleep;
