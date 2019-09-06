import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import Sound from 'react-native-sound';

const hink = new Sound('hink.mp3', Sound.MAIN_BUNDLE);

import Back from '../commons/Back';

const { width, height } = Dimensions.get('window');

class Relax extends Component {
  render() {

    hink.play()

    return(

      <ImageBackground
      style={{ width, height }}
      source={require('../img/relax.png')}>

      <Back />

      <View style={{
        flex: 0.9,
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
      <Text>Relax</Text>
      </View>

      </ImageBackground>
    );
  }
}

export default Relax;
