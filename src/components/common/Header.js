import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar
} from 'react-native';
import {
  Colors, Sizes
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components
} from 'expo';

// components
import Logo from './Logo';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo color={this.props.color || Colors.LightShadow} size={30} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Sizes.OuterFrame,
    paddingHorizontal: Sizes.OuterFrame,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },

  logo: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
