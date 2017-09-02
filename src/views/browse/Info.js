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

export default class CompanyInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'http://www.multiversedb.com/static/processed_images/pied-piper-the-initial-team.mjxgqbdpf7dad2bec1jv.o.jpg'}}
          style={styles.cover} />
        <LinearGradient
          
          style={StyleSheet.absoluteFill} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },

  cover: {
    flex: 1
  }
});
