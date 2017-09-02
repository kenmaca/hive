import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, Image, TouchableOpacity
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components, BarCodeScanner, BlurView
} from 'expo';

// components
import {
  Icon
} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import UnderlinedButton from '../common/UnderlinedButton';
import ProductCard from './ProductCard';

// preload image
let moreCard = require('../../../res/img/more.gif');

export default class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redeemVisible: false,
      scannerVisible: false
    };

    // bindings
    this.redeemCard = this.redeemCard.bind(this);
  }

  redeemCard() {
    this.setState({
      redeemVisible: true},
      () => setTimeout(this.props.onNewCard, 9000));
  }

  render() {
    return this.state.redeemVisible ? (
      <Animatable.View
        animation='flipInX'
        duration={300}>
        <Image
          source={moreCard}
          style={[styles.container, this.props.style]}>
          <Animatable.View
            animation='bounceInUp'
            delay={8000}
            style={[styles.container, this.props.style]}>
            <ProductCard style={[styles.container, this.props.style]} />
          </Animatable.View>
        </Image>
      </Animatable.View>
    ): (
      <BarCodeScanner
        onBarCodeRead={this.redeemCard}
        style={[styles.container, this.props.style]}>
        <Animatable.View
          style={styles.scannerHelp}
          animation={this.state.scannerVisible ? 'fadeOut': null}>
          <BlurView
            tint='dark'
            intensity={100}
            style={styles.blur}>
            <Text style={[Styles.Text, Styles.Title, Styles.Emphasized, Styles.Alternate, styles.title]}>
              獲得更多的卡.
            </Text>
            <Text style={[Styles.Text, Styles.Subdued, styles.subtitle]}>
              每天要索取一個新的神秘卡，或者掃描物理HVMD卡直接兌換.
            </Text>
            <UnderlinedButton
              onPress={this.redeemCard}
              label='兌現今日免費卡 Daily free card' />
            <UnderlinedButton
              onPress={() => this.setState({
                scannerVisible: true})}
              label='掃描物理卡 Scan' />
          </BlurView>
        </Animatable.View>
        {
          this.state.scannerVisible && (
            <View style={[StyleSheet.absoluteFill, styles.scannerContainer]}>
              <View style={styles.close}>
                <Animatable.View
                  animation='bounceIn'
                  delay={400}>
                  <TouchableOpacity onPress={() => this.setState({
                    scannerVisible: false})}>
                    <Icon
                      name='close'
                      size={25}
                      color={Colors.AlternateText} />
                  </TouchableOpacity>
                </Animatable.View>
              </View>
              <Animatable.View
                animation='slideInUp'
                duration={100}
                delay={200}
                style={styles.scannerPrompt}>
                <Text style={[Styles.Text, Styles.EmphasizedText, Styles.Center]}>
                  將QR碼放在中心的物理HVMD卡上進行掃描
                </Text>
              </Animatable.View>
            </View>)}
      </BarCodeScanner>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MenuBackground
  },

  title: {
    width: Sizes.Width / 2
  },

  subtitle: {
    marginTop: Sizes.OuterFrame,
    marginBottom: Sizes.InnerFrame * 2,
    width: Sizes.Width / 2
  },

  blur: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: Sizes.OuterFrame
  },

  scannerHelp: {
    flex: 1
  },

  scannerContainer: {
    justifyContent: 'flex-start'
  },

  close: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: Sizes.OuterFrame
  },

  scannerPrompt: {
    left: 0,
    right: 0,
    padding: Sizes.OuterFrame,
    backgroundColor: Colors.Foreground
  }
});
