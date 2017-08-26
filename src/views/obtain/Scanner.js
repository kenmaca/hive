import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components, BarCodeScanner
} from 'expo';

export default class Scanner extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeRead={console.log}
          style={styles.container} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },
});
