import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, TouchableOpacity
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
import {
  Icon
} from 'react-native-elements';
import UppercasedText from './UppercasedText';

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.container}>
        <Icon
          name={this.props.icon || 'new-releases'}
          size={this.props.size}
          color={this.props.color}
          style={Styles.BottomHalfSpacing} />
        <UppercasedText
          style={[Styles.Text, Styles.SmallText, Styles.Emphasized, styles.label]}>
          {this.props.label || 'Button'}
        </UppercasedText>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Sizes.InnerFrame / 3
  }
});
