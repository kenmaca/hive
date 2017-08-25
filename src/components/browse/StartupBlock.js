import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Image
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components
} from 'expo';

// components
import * as Animatable from 'react-native-animatable';

export default class StartupBlock extends React.Component {
  render() {
    return (
      <Animatable.View
        animation='fadeInUp'
        delay={Math.floor((Math.random() * 500) + 1)}>
        <Image
          source={this.props.cover && {uri: this.props.cover}}
          style={styles.container}>

        </Image>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Sizes.Width / 3,
    width: Sizes.Width * 2 / 3,
    marginRight: Sizes.InnerFrame,
    marginBottom: Sizes.InnerFrame,
    backgroundColor: Colors.Background
  }
});
