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
  Constants, Components, LinearGradient
} from 'expo';

// components
import * as Animatable from 'react-native-animatable';
import UppercasedText from '../components/common/UppercasedText';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import More from '../components/cards/More';
import ProductCard from '../components/cards/ProductCard';
import PackageCard from '../components/cards/PackageCard';
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
    this.appendCard = this.appendCard.bind(this);
  }

  appendCard() {
    this.setState({
      cards: [...this.state.cards, {[this.state.cards.length * 2 - 1]: this.state.cards.length * 2}]
    });
  }

  _renderCard({item, index}) {
    return index === this.state.cards.length - 1
      ? (<More onNewCard={this.appendCard} style={styles.productCard} />)
      : (
        <TouchableOpacity
          onPress={Actions.product}
          style={styles.productCard}>
          <ProductCard />
        </TouchableOpacity>);
  }

  render() {

    // set statusbar
    Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);

    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[Colors.FirstGradient, Colors.SecondGradient]}
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
                Styles.Text, Styles.Emphasized, Styles.Title, Styles.BottomHalfSpacing, Styles.Alternate]}>
                下午好, Kenneth.
              </UppercasedText>
              <Text style={[Styles.Text, Styles.Subdued]}>
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
              color={Colors.SubduedText}
              labelColor={Colors.AlternateText}
              onPress={Actions.browseList} />
            <Button
              label='獲得更多的卡'
              type='entypo'
              icon='documents'
              color={Colors.Accent}
              onPress={() => this.refs.carousel.snapToItem(this.state.cards.length - 1)} />
            <Button
              label='出貨量'
              icon='local-shipping'
              color={Colors.SubduedText}
              labelColor={Colors.AlternateText}
              onPress={Actions.trackingList} />
            <Button
              label='設置'
              type='entypo'
              icon='sound-mix'
              color={Colors.SubduedText}
              labelColor={Colors.AlternateText}
              onPress={Actions.setting} />
          </View>
          <View style={styles.statusBar}>
            <Text style={[Styles.Text, Styles.SmallText, Styles.Center, Styles.Alternate]}>
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
    alignItems: 'center',
    backgroundColor: Colors.MenuBackground
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
    backgroundColor: Colors.MenuBackground
  },

  buttons: {
    alignItems: 'center',
    paddingBottom: Sizes.InnerFrame,
    paddingTop: 0,
    backgroundColor: Colors.MenuBackground
  },

  productCard: {
    flex: 1,
    width: Sizes.Width * 0.8,
    justifyContent: 'space-between'
  },

  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)'
  }
});
