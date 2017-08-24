import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar
} from 'react-native';
import {
  Colors, Sizes
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';

// components
import * as Animatable from 'react-native-animatable';
import Logo from '../components/common/Logo';

export default class Loader extends React.Component {
  componentDidMount() {
    Platform.OS === 'ios' && StatusBar.setHidden(true, 'slide');
    setTimeout(Actions.onboardingIntro, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation='fadeIn'>
          <Animatable.View
            animation='pulse'
            iterationCount='infinite'
            delay={1000}>
            <Logo size={100} />
          </Animatable.View>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.MenuBackground
  },
});
