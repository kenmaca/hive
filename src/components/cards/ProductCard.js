import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, Image
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
import * as Animatable from 'react-native-animatable';
import UppercasedText from '../common/UppercasedText';

export default class ProductCard extends React.Component {
  render() {
    return (
      <Image
        source={{uri: 'https://dtpmhvbsmffsz.cloudfront.net/posts/2016/08/05/57a50f254e95a33a7d0085fe/m_57a50f84c2845687140082e4.jpg'}}
        style={[styles.container, this.props.style]}>
        <LinearGradient
          colors={[Colors.Shadow, Colors.DarkTransparent]}
          style={styles.productCardHeader}>
          <View style={styles.productCardHeaderTitle}>
            <UppercasedText style={[Styles.Text, Styles.Emphasized, Styles.Alternate]}>
              Cotton Hoodie
            </UppercasedText>
          </View>
          <Animatable.View
            animation='bounceIn'
            delay={700}
            style={styles.productCardHeaderValue}>
            <Text style={[Styles.Text, Styles.Title, Styles.Emphasized]}>6</Text>
            <UppercasedText style={[Styles.Text, Styles.SmallText]}>Cards</UppercasedText>
          </Animatable.View>
        </LinearGradient>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },

  productCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  productCardHeaderTitle: {
    margin: Sizes.InnerFrame
  },

  productCardHeaderValue: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Foreground
  }
});
