import React from 'react';
import {
  StyleSheet, View, Image
} from 'react-native';
import {
  Sizes, Colors
} from '../../Const';

export default class Logo extends React.Component {
  render() {
    return (
      <Image
        {...this.props}
        source={require('../../../res/img/logo.png')}
        style={[
          styles.container,
          this.props.styles,
          this.props.size && {
            width: this.props.size,
            height: this.props.size
          },
          this.props.color && {
            tintColor: this.props.color
          }
        ]} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50
  }
});
