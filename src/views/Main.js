import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, Image,
  TouchableOpacity
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components, LinearGradient, BarCodeScanner, BlurView
} from 'expo';

// components
import * as Animatable from 'react-native-animatable';
import UppercasedText from '../components/common/UppercasedText';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import Carousel, {
  Pagination
} from 'react-native-snap-carousel';
import {
  Icon
} from 'react-native-elements';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: 0,
      cards: [{1: 2}, {3: 4}, {5: 6}, {7: 8}, {9: 10}]
    };

    // bindings
    this._renderCard = this._renderCard.bind(this);
  }

  _renderCard({item, index}) {
    return (
      <TouchableOpacity
        onPress={Actions.product}>
        {index === this.state.cards.length - 1
          ? (
            <BarCodeScanner
              onBarCodeRead={console.log}
              style={styles.productCard}>
              <BlurView
                tint='dark'
                intensity={100}
                style={styles.scannerHelp}>
                <Text style={[Styles.Text, Styles.Title, Styles.Emphasized, Styles.Alternate, Styles.Oversized, styles.title]}>
                  Get more cards.
                </Text>
                <Text style={[Styles.Text, Styles.Title, Styles.Subdued, styles.subtitle]}>
                  Claim a new mystery card once per day, or scan a physical HVMD card to redeem it directly.
                </Text>
              </BlurView>
            </BarCodeScanner>)
          : (
            <Image
              source={{uri: 'https://dtpmhvbsmffsz.cloudfront.net/posts/2016/08/05/57a50f254e95a33a7d0085fe/m_57a50f84c2845687140082e4.jpg'}}
              style={styles.productCard}>
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
            </Image>)}
      </TouchableOpacity>
    );
  }

  render() {

    // set statusbar
    Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);

    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#B721FF', '#21D4FD']}
          start={{
            x: 1, y: 0}}
          end={{
            x: 0, y: 1}}
          style={styles.carouselContainer}>
          <Animatable.View
            style={styles.carouselWrapper}
            animation='slideInDown'
            duration={300}
            delay={300}>
            <Carousel
              ref='carousel'
              data={

                // TODO: gay carousel bug mutates data, so
                // provide a copy instead each render
                this.state.cards.map(i => i)}
              renderItem={this._renderCard}
              sliderWidth={Sizes.Width}
              itemWidth={Sizes.Width * 0.8}
              slideStyle={styles.carouselWrapper}
              onSnapToItem={i => this.setState({
                activeCard: i})} />
          </Animatable.View>
          <Pagination
            dotsLength={this.state.cards.length || 0}
            activeDotIndex={this.state.activeCard}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6} />
        </LinearGradient>
        <View style={styles.statusContainer}>
          <View style={[Styles.Card, Styles.EqualColumns, styles.statusContent]}>
            <View style={styles.statusTextContainer}>
              <UppercasedText style={[
                Styles.Text, Styles.Emphasized, Styles.Title, Styles.BottomHalfSpacing]}>
                下午好, Kenneth.
              </UppercasedText>
              <Text style={[Styles.Text]}>
                感覺很幸運？今天有兩款免費產品可供選擇。
              </Text>
            </View>
            <View style={styles.displayPhotoContainer}>
              <Image
                source={{uri: 'https://scontent.fhkg4-2.fna.fbcdn.net/v/t1.0-9/12032203_10155971613590063_6845474097114590785_n.jpg?oh=ca705fbfd78bc30b1e18575750a677dc&oe=5A2AF7A9'}}
                style={styles.displayPhoto} />
            </View>
          </View>
          <View style={[Styles.Card, Styles.EqualColumns, styles.buttons]}>
            <Button
              label='瀏覽'
              type='entypo'
              icon='shop'
              onPress={Actions.browseList} />
            <Button
              label='獲得更多的卡'
              type='entypo'
              icon='documents'
              onPress={() => this.refs.carousel.snapToItem(this.state.cards.length - 1)} />
            <Button
              label='出貨量'
              icon='local-shipping'
              onPress={Actions.trackingList} />
            <Button
              label='設置'
              type='entypo'
              icon='sound-mix' />
          </View>
          <View style={styles.statusBar}>
            <Text style={[Styles.Text, Styles.SmallText, Styles.Center]}>
              預計在3天內交付兩個包裹。
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Accent
  },

  carouselContainer: {
    flex: 1,
    paddingTop: Sizes.OuterFrame * 2
  },

  carouselWrapper: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },

  statusContent: {
    alignItems: 'center'
  },

  statusTextContainer: {
    flex: 1
  },

  displayPhotoContainer: {
    alignItems: 'flex-start'
  },

  displayPhoto: {
    width: 60,
    height: 60,
    backgroundColor: Colors.MenuBackground
  },

  statusBar: {
    padding: Sizes.InnerFrame / 2,
    backgroundColor: Colors.Background
  },

  buttons: {
    alignItems: 'center',
    paddingBottom: Sizes.InnerFrame,
    paddingTop: 0
  },

  productCard: {
    flex: 1,
    width: Sizes.Width * 0.8,
    backgroundColor: Colors.Foreground,
    justifyContent: 'space-between'
  },

  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)'
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
  },

  scannerHelp: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: Sizes.OuterFrame
  },

  title: {
    width: Sizes.Width / 2
  },

  subtitle: {
    marginTop: Sizes.OuterFrame,
    width: Sizes.Width / 2
  },
});
