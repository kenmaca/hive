import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, TouchableOpacity
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

export default class UnderlinedButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          styles.container, this.props.color && {
            borderColor: this.props.color}, this.props.style]}>
        <Text style={[
          Styles.Text, Styles.Emphasized, Styles.Alternate, styles.label,
          this.props.color && {
            color: this.props.color
          }]}>
          {this.props.label}
        </Text>
        <Icon
          name='arrow-forward'
          color={this.props.color || Colors.AlternateText}
          size={Sizes.Text}
          style={styles.arrow} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.AlternateText,
    alignItems: 'center',
    marginBottom: Sizes.InnerFrame
  },

  label: {
    lineHeight: Sizes.OuterFrame,
    marginRight: Sizes.InnerFrame / 3
  }
});
