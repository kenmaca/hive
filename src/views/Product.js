import React from 'react';
import {
  StyleSheet, View, Text, Image, ScrollView, Platform, StatusBar,
  TouchableOpacity
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';
import {
  Constants, LinearGradient, BlurView
} from 'expo';

// components
import * as Animatable from 'react-native-animatable';
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import UppercasedText from '../components/common/UppercasedText';
import UnderlinedButton from '../components/common/UnderlinedButton';
import QRCode from 'react-native-qrcode';
import {
  Button, Icon
} from 'react-native-elements';
import {
  Actions
} from 'react-native-router-flux';

// custom animations
let AnimatedTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareVisible: false
    };
  }

  render() {

    // set statusbar
    Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);

    return (
      <View style={styles.container}>
        <ContentCoverSlider
          ref='container'
          title='棉連帽衫 Cotton Hoodie'
          background={(
            <LinearGradient
              colors={['#B721FF', '#21D4FD']}
              start={{
                x: 1, y: 0}}
              end={{
                x: 0, y: 1}}
              style={styles.cover} />)}
          backgroundColor={Colors.Facebook}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={event => this.refs.container.onScroll(event)}>
            <View style={[
              styles.card, styles.header]}>
              <Text style={[
                Styles.Text, Styles.Emphasized, Styles.Title, Styles.Alternate]}>
                彌補的 Redeeming (2)
              </Text>
            </View>
            <Image
              style={[
                Styles.Card, styles.card, styles.photo, styles.headerPhoto]}
              source={{
                uri: 'https://ae01.alicdn.com/kf/HTB1vteeSFXXXXaBXpXXq6xXFXXXm/New-Women-Sweatshirt-2017-Autumn-Embroidery-Facebook-Long-Sleeve-Loose-Pullovers-White-Blue-Blac-Hoodie-Sweatshirt.jpg'}} />
            <View style={[
              Styles.Card, styles.card, styles.headerContent]}>
              <UppercasedText style={[
                Styles.Text, Styles.Emphasized, Styles.Title]}>
                棉連帽衫 Cotton Hoodie
              </UppercasedText>
              <UppercasedText style={[Styles.Text, Styles.SmallText, Styles.BottomSpacing]}>
                from Facebook, Inc.
              </UppercasedText>
              <Text style={[Styles.Text, Styles.BottomHalfSpacing]}>
                採用優質手工編織的 Supima 棉製成，這款連帽衫採用 Facebook 風格化的 “f” 作為標誌性藍色的右胸上的繡花標誌.
              </Text>
            </View>
            <Image
              style={[
                Styles.Card, styles.card, styles.photo]}
              source={{
                uri: 'https://ae01.alicdn.com/kf/HTB1e0NZSFXXXXXUXVXXq6xXFXXX8/New-Women-Sweatshirt-2017-Autumn-Embroidery-Facebook-Long-Sleeve-Loose-Pullovers-White-Blue-Blac-Hoodie-Sweatshirt.jpg'}} />
            <Image
              style={[
                Styles.Card, styles.card, styles.photo, styles.headerPhoto]}
              source={{
                uri: 'https://cdn.dribbble.com/users/172256/screenshots/1213052/shaka-stickers.jpg'}} />
            <View style={[
              Styles.Card, styles.card, styles.headerContent]}>
              <UppercasedText style={[
                Styles.Text, Styles.Emphasized, Styles.Title]}>
                模切貼紙 Stickers
              </UppercasedText>
              <UppercasedText style={[Styles.Text, Styles.SmallText, Styles.BottomSpacing]}>
                from Facebook, Inc.
              </UppercasedText>
              <Text style={[Styles.Text, Styles.BottomHalfSpacing]}>
                高級定制貼紙來裝飾您的電子設備並支持Facebook.
              </Text>
            </View>
            <View style={[Styles.Card, styles.company]}>
              <View style={styles.companyContent}>
                <View style={styles.companyInfo}>
                  <UppercasedText style={[
                    Styles.Text, Styles.Emphasized, Styles.Alternate, styles.companyTitle]}>
                    Facebook, Inc.
                  </UppercasedText>
                  <Text style={[
                    Styles.Text, Styles.Subdued, styles.companySubtitle]}>
                    The world's social platform
                  </Text>
                </View>
                <UnderlinedButton
                  onPress={Actions.companyInfo}
                  label='學到更多 Learn more' />
              </View>
              <Image
                source={{uri: 'https://image.freepik.com/free-vector/facebook-logo--vector--psd_286-2147488451.jpg'}}
                style={styles.logo} />
            </View>
          </ScrollView>
        </ContentCoverSlider>
        <View
          colors={[Colors.Transparent, Colors.Foreground]}
          style={styles.options}>
          <View style={styles.cost}>
            <View style={styles.costCards}>
              <Text style={[
                Styles.Text, Styles.Title, Styles.Emphasized, styles.costCardsText]}>
                3/3 牌
              </Text>
              <View style={styles.check}>
                <Icon name='check' size={15} color={Colors.AlternateText} />
              </View>
            </View>
            <UppercasedText style={[
              Styles.Text, Styles.SmallText, Styles.Subdued, styles.costText]}>
              需要兌換 Required
            </UppercasedText>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => this.setState({
                shareVisible: true})}
              style={[styles.SquareButton, styles.negative]}>
              <UppercasedText style={[Styles.Text, Styles.Alternate]}>
                禮品
              </UppercasedText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={Actions.addressForm}
              style={[styles.SquareButton, styles.positive]}>
              <UppercasedText style={[Styles.Text, Styles.Emphasized, Styles.Alternate]}>
                產品交換 Redeem
              </UppercasedText>
            </TouchableOpacity>
          </View>
        </View>
        {
          this.state.shareVisible && (
            <Animatable.View
              animation='fadeIn'
              style={StyleSheet.absoluteFill}>
              <BlurView
                tint='dark'
                intensity={100}
                style={styles.blur}>
                <Animatable.View
                  animation='bounceInUp'
                  duration={500}
                  delay={300}
                  style={styles.shareQr}>
                  <View style={styles.shareQrLabel}>
                    <UppercasedText style={[Styles.Text, Styles.Emphasized, Styles.Title, styles.shareQrText]}>
                      禮物給朋友 Gift
                    </UppercasedText>
                    <Text style={[Styles.Text, styles.shareQrText]}>
                      通過在自己的應用程序上進行掃描，將此產品贈送給朋友，免費獲得一張新卡.
                    </Text>
                  </View>
                  <QRCode
                    value='hivemade qr code here for product share'
                    size={Sizes.Width * 0.8}
                    bgColor={Colors.MenuBackground}
                    fgColor={Colors.AlternateText} />
                  <UnderlinedButton
                    color={Colors.Text}
                    style={styles.cancel}
                    onPress={() => this.setState({
                      shareVisible: false})}
                    label='不，我想保留 Cancel' />
                </Animatable.View>
              </BlurView>
            </Animatable.View>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },

  card: {
    margin: Sizes.InnerFrame,
    marginTop: 0
  },

  header: {
    marginTop: Sizes.InnerFrame * 5
  },

  photo: {
    height: Sizes.Height / 2
  },

  options: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: Sizes.InnerFrame,
    paddingHorizontal: Sizes.OuterFrame,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.Foreground
  },

  cost: {
  },

  costCards: {
    marginBottom: Sizes.InnerFrame / 3,
    flexDirection: 'row',
    alignItems: 'center'
  },

  costCardsText: {
    color: Colors.PositiveButton
  },

  check: {
    marginLeft: Sizes.InnerFrame / 2,
    width: Sizes.OuterFrame * 0.8,
    height: Sizes.OuterFrame * 0.8,
    borderRadius: Sizes.OuterFrame * 0.8 / 2,
    backgroundColor: Colors.PositiveButton,
    alignItems: 'center',
    justifyContent: 'center'
  },

  costText: {
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
    marginRight: 5
  },

  positive: {
    backgroundColor: Colors.PositiveButton
  },

  cover: {
    height: Sizes.Height / 4
  },

  blur: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  shareQr: {
    padding: Sizes.OuterFrame,
    backgroundColor: Colors.Foreground,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  shareQrLabel: {
    width: Sizes.Width * 0.79,
    marginBottom: Sizes.InnerFrame
  },

  shareQrText: {
    marginBottom: Sizes.InnerFrame / 2
  },

  cancel: {
    marginTop: Sizes.InnerFrame,
    marginBottom: 0
  },

  company: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Sizes.OuterFrame * 4,
    justifyContent: 'space-between',
    backgroundColor: Colors.MenuBackground
  },

  logo: {
    width: Sizes.Width / 4,
    height: Sizes.Width / 4
  },

  companyContent: {
    paddingVertical: Sizes.InnerFrame / 2,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },

  companyInfo: {
    flex: 1
  },

  headerPhoto: {
    marginBottom: 0
  },

  headerContent: {
    marginTop: 0
  }
});
