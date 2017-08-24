import React from 'react';
import {
  StyleSheet, View, Text, Image, ScrollView, Platform, StatusBar,
  TouchableOpacity
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';
import {
  Constants, LinearGradient
} from 'expo';

// components
import * as Animatable from 'react-native-animatable';
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import UppercasedText from '../components/common/UppercasedText';
import {
  Button
} from 'react-native-elements';

// custom animations
let AnimatedTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

export default class Product extends React.Component {
  componentDidMount() {
    Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);
    Platform.OS === 'ios' && StatusBar.setHidden(false, 'slide');
  }

  render() {
    return (
      <View style={styles.container}>
        <ContentCoverSlider
          ref='container'
          title='棉連帽衫 Cotton Hoodie'
          backgroundColor={Colors.Facebook}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={event => this.refs.container.onScroll(event)}>
            <View style={[
              styles.card, styles.header]}>
              <Text style={[
                Styles.Text, Styles.Emphasized, Styles.Title, Styles.Alternate]}>
                彌補的 Redeeming (1)
              </Text>
            </View>
            <View style={[
              Styles.Card, styles.card]}>
              <UppercasedText style={[
                Styles.Text, Styles.Emphasized, Styles.Title]}>
                棉連帽衫 Cotton Hoodie
              </UppercasedText>
              <UppercasedText style={[Styles.Text, Styles.SmallText, Styles.BottomSpacing]}>
                from Facebook, Inc.
              </UppercasedText>
              <Text style={[Styles.Text, Styles.BottomHalfSpacing]}>
                採用優質手工編織的Supima棉製成，這款連帽衫採用Facebook風格化的“f”作為標誌性藍色的右胸上的繡花標誌。
              </Text>
              <Text style={Styles.Text}>
                Made with premium hand-woven Supima cotton, this hoodie features Facebook's stylized "f" as an embroidered logo on the right chest in their signature blue color.
              </Text>
            </View>
            <Image
              style={[
                Styles.Card, styles.card, styles.photo]}
              source={{
                uri: 'https://ae01.alicdn.com/kf/HTB1vteeSFXXXXaBXpXXq6xXFXXXm/New-Women-Sweatshirt-2017-Autumn-Embroidery-Facebook-Long-Sleeve-Loose-Pullovers-White-Blue-Blac-Hoodie-Sweatshirt.jpg'}} />
            <Image
              style={[
                Styles.Card, styles.card, styles.photo]}
              source={{
                uri: 'https://ae01.alicdn.com/kf/HTB1e0NZSFXXXXXUXVXXq6xXFXXX8/New-Women-Sweatshirt-2017-Autumn-Embroidery-Facebook-Long-Sleeve-Loose-Pullovers-White-Blue-Blac-Hoodie-Sweatshirt.jpg'}} />
          </ScrollView>
        </ContentCoverSlider>
        <LinearGradient
          colors={[Colors.Transparent, Colors.Foreground]}
          style={styles.options}>
          <Animatable.View animation='bounceInRight' delay={100}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={[styles.SquareButton, styles.negative]}>
                <UppercasedText style={[Styles.Text, Styles.Alternate]}>
                  垃圾
                </UppercasedText>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.SquareButton, styles.positive]}>
                <UppercasedText style={[Styles.Text, Styles.Emphasized, Styles.Alternate]}>
                  把它寄給我 Accept
                </UppercasedText>
              </TouchableOpacity>
            </View>
            <View style={[styles.shipping]}>
              <Text style={[Styles.Text, Styles.Light, styles.shippingText]}>
                船隻3-5天 Shipping Time
              </Text>
            </View>
          </Animatable.View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  card: {
    margin: Sizes.InnerFrame,
    marginTop: 0
  },

  header: {
    marginTop: 125
  },

  photo: {
    height: Sizes.Height / 2
  },

  options: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: Sizes.InnerFrame,
    paddingBottom: Sizes.InnerFrame,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  shipping: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  shippingText: {
    margin: Sizes.InnerFrame / 2,
    marginRight: Sizes.InnerFrame
  },

  buttons: {
    flexDirection: 'row'
  },

  SquareButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Sizes.InnerFrame
  },

  negative: {
    backgroundColor: Colors.NegativeButton,
    marginRight: 0
  },

  positive: {
    backgroundColor: Colors.Facebook
  }
});
