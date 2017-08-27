import React, {
  Component
} from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../../Const';

// components
import UppercasedText from './UppercasedText';

export default class HeaderText extends Component {
  render() {
    return (
      <UppercasedText style={[Styles.Text, Styles.Emphasized, Styles.SmallText, this.props.style]}>
        {this.props.text}
      </UppercasedText>
    );
  }
}
