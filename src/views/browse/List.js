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
import * as Animatable from 'react-native-animatable';
import Header from '../../components/common/Header';

export default class BrowseList extends React.Component {
  render() {

    // set statusbar
    Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);

    return (
      <View style={styles.container}>
        <Animatable.View
          animation='slideInDown'
          duration={300}
          delay={200}
          style={styles.header}>
          <Header
            color={Colors.AlternateText} />
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },

  header: {
    backgroundColor: Colors.MenuBackground
  }
});
