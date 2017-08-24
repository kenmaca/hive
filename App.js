import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';
import {
  Router, Scene, Actions, Stack, Overlay, Modal
} from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import {
  Colors, Sizes
} from './src/Const';

// views
import Loader from './src/views/Loader';
import OnboardingIntro from './src/views/onboarding/Intro';
import Main from './src/views/Main';
import Product from './src/views/Product';

export default class App extends React.Component {
  render() {
    return (
      <Router getSceneStyle={() => ({
        backgroundColor: Colors.MenuBackground,
        shadowOpacity: 1,
        shadowRadius: 3})}>
        <Modal hideNavBar
         transitionConfig={() => ({screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid})}>
          <Stack
            hideNavBar
            key='root'>
            <Scene
              initial
              key='loader'
              component={Loader} />
            <Scene
              key='onboardingIntro'
              component={OnboardingIntro} />
            <Scene
              key='main'
              component={Main} />
            <Scene
              key='product'
              component={Product} />
          </Stack>
        </Modal>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },
});
