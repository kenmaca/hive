import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';
import {
  Router, Scene, Actions
} from 'react-native-router-flux';
import {
  Colors, Sizes
} from './src/Const';

// views
import Loader from './src/views/Loader';
import Product from './src/views/Product';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene
            hideNavBar
            key='root'>
            <Scene
              key='loader'
              component={Loader} />
            <Scene
              initial
              key='product'
              component={Product} />
          </Scene>
        </Router>
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
