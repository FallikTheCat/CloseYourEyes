import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import Sound from 'react-native-sound';

const sleepp = new Sound('sleep1.mp3', Sound.MAIN_BUNDLE);

import Back from '../commons/Back';

const { width, height } = Dimensions.get('window');

class Concentrate extends Component {
  render() {

    sleepp.play()

    return(

      <ImageBackground
      style={{ width, height }}
      source={require('../img/focus.png')}>

      <Back />

      <View style={{
        flex: 0.9,
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
      <Text>Concentrate</Text>
      </View>

      </ImageBackground>
    );
  }
}

export default Concentrate;
