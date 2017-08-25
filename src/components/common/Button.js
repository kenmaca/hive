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
        <View style={[
          styles.icon,
          this.props.size && {
            height: this.props.size * 1.5,
            width: this.props.size * 1.5}]}>
          <Icon
            type={this.props.type}
            name={this.props.icon || 'new-releases'}
            size={this.props.size || 25}
            color={this.props.color}
            style={Styles.BottomHalfSpacing} />
        </View>
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
  },

  icon: {
    height: 37.5,
    width: 37.5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
