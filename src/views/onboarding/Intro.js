import React from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';
import {
  Constants, Video
} from 'expo';
import {
  Actions
} from 'react-native-router-flux';

// components
import * as Animatable from 'react-native-animatable';
import UppercasedText from '../../components/common/UppercasedText';
import {
  Button
} from 'react-native-elements';

export default class Intro extends React.Component {
  render() {
    return (
      <View style={[styles.container, styles.background]}>
        <Video
          isMuted
          isLooping
          shouldPlay
          ref='video'
          source={require('../../../res/vid/onboard.mp4')}
          rate={1.0}
          resizeMode={Video.RESIZE_MODE_COVER}
          style={styles.overlay} />
        <Animatable.View
          animation='fadeOut'
          duration={6000}
          style={[styles.background, styles.overlay]} />
        <Animatable.View
          animation='bounceInUp'
          delay={1500}
          style={styles.content}>
          <View style={[Styles.Card, styles.card]}>
            <UppercasedText style={[
              Styles.Text, Styles.Emphasized, Styles.Title, Styles.BottomSpacing]}>
              Welcome to Hive / 歡迎來到蜂巢
            </UppercasedText>
            <Text style={Styles.Text}>
              在我們開始之前，請告訴我們一些關於你的事情。
            </Text>
          </View>
          <Button
            icon={{
              name: 'user',
              type: 'entypo',
              size: Sizes.Text
            }}
            title='註冊一個新帳號 Register'
            onPress={Actions.product}
            backgroundColor={Colors.PositiveButton}
            textStyle={[Styles.Text, Styles.Emphasized, Styles.Alternate]}
            buttonStyle={[styles.field, styles.fieldSpacing]} />
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  background: {
    backgroundColor: Colors.MenuBackground
  },

  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },

  card: {
    margin: Sizes.InnerFrame,
    marginBottom: Sizes.InnerFrame / 2
  },

  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Sizes.Height / 10
  },

  field: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0
  }
});
