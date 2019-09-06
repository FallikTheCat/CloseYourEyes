import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions,
Image, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '../commons/Button';

const { width, height } = Dimensions.get('window');

class Main extends Component{

  state= {
    opacity: new Animated.Value(0),
    opacity1: new Animated.Value(0),
    opacity2: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 30000,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.opacity1, {
      toValue: 1,
      duration: 50000,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.opacity2, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return(

      <ImageBackground
      source={require('../img/bg0.png')}
      style={{ width, height, }}
      >

      <View style={{ justifyContent: 'center', alignItems: 'center',
      marginRight: width*0.13}}>

      <Animated.Image
      source={require('../img/mars.png')}
      onLoad={this.onLoad}
      style={[
        {
          opacity: this.state.opacity,
          transform: [
            {
              scale: this.state.opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
              })
            }
          ]
        },
      ]}
      >
      </Animated.Image>

      </View>

      <View style={{ alignItems: 'flex-end', marginRight: width*0.17}}>

      <Animated.Image
      source={require('../img/pluto.png')}
      onLoad={this.onLoad}
      style={[
        {
          opacity: this.state.opacity1,
          transform: [
            {
              scale: this.state.opacity1.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
              })
            }
          ]
        },
      ]}
      >
      </Animated.Image>

      </View>

      <View style={{ marginLeft: width*0.05 }}>

      <Animated.Image
      source={require('../img/moon.png')}
      onLoad={this.onLoad}
      style={[
        {
          opacity: this.state.opacity2,
          transform: [
            {
              scale: this.state.opacity2.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
              })
            }
          ]
        },
      ]}
      >
      </Animated.Image>

      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>

      <Text style={{
        marginTop: height*0.04,
        fontSize: 16,
        color: 'white'
      }}>Close your eyes and listen...</Text>

      </View>

      </View>

      <View style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'}}>

      <Button
      onPress={() => Actions.Concentrate()}
      text='Concentrate'
      />

      <Button
      onPress={() => Actions.Relax()}
      text='Relax'
      />

      <Button
      onPress={() => Actions.Sleep()}
      text='Sleep'
      />

      </View>

      </ImageBackground>
    );
  }
}

export default Main;
