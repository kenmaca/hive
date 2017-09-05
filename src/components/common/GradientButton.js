import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components, LinearGradient
} from 'expo';

// components
import {
  Icon
} from 'react-native-elements';

export default class GradientButton extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={[Colors.FirstGradient, Colors.SecondGradient]}
        start={{
          x: 1, y: 0}}
        end={{
          x: 0, y: 1}}
        style={[styles.container, this.props.style]}>
        <Icon
          name='check'
          color={Colors.AlternateText}
          size={Sizes.Text * 1.2} />
        <Text style={[
          Styles.Text, Styles.Emphasized, Styles.Alternate, styles.label]}>
          {this.props.label}
        </Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: Sizes.InnerFrame / 2,
    paddingHorizontal: Sizes.InnerFrame * 2,
    // borderRadius: Sizes.OuterFrame
  },

  label: {
    marginLeft: Sizes.InnerFrame / 2
  }
});
