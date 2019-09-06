import React, { Component } from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Main from './components/Main';
import Relax from './components/Relax';
import Concentrate from './components/Concentrate';
import Sleep from './components/Sleep';

class Root extends Component {
  render() {
    return(
      <Router>
        <Scene
        key='Root'>
          <Scene
          key='Main'
          component={Main}
          hideNavBar
          initial
          />

          <Scene
          key='Relax'
          component={Relax}
          hideNavBar
          />

          <Scene
          key='Concentrate'
          component={Concentrate}
          hideNavBar
          />

          <Scene
          key='Sleep'
          component={Sleep}
          hideNavBar
          />

        </Scene>
      </Router>

    );
  }
}

export default Root;
