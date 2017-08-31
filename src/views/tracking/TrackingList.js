import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, ScrollView, TouchableOpacity,
  Image, RefreshControl
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

//components
import * as Animatable from 'react-native-animatable';
import TrackingCard from './TrackingCard';
import TrackingIndicator from './TrackingIndicator';
import UppercasedText from '../../components/common/UppercasedText';
import HeaderText from '../../components/common/HeaderText';
import ContentCoverSlider from '../../components/common/ContentCoverSlider';
import {
  Icon
} from 'react-native-elements';

export default class TrackingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false
    };
  }

  _onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 3000);
  }

  renderNonDelivered() {
    return (
      <View>
        <View style={styles.cardContianer}>
          <TrackingCard
            status='Ordered'
            image='https://shop.tesla.com/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/100044201_0.jpg'
            statusDate='Monday, August 17th'/>
          <TrackingIndicator
            orderDate='17 Aug'/>
        </View>
        {/* <View style={styles.cardContianer}>
          <TrackingCard
            status='Shipped'
            shipped/>
        <TrackingIndicator shipped/>
        </View> */}
        {/* <Image
          source={{uri: 'http://img1.bitautoimg.com/bitauto/2016/03/17/844bb012-0e79-40f0-b6c6-77b32f92edd4_630.jpg'}}
          style={{height: null, width: null, resizeMode: 'stretch'}}>
        </Image> */}
        <View style={styles.cardContianer}>
          <TrackingCard
            status='In Transit'
            image='https://shop.tesla.com/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/100040601_0.jpg'
            statusDate='Thursday, August 28th'
            expected/>
          <TrackingIndicator
            inTransit
            orderDate='17 Aug'
            shipDate='18 Aug'
            deliverDate='28 Aug'/>
        </View>
      </View>
    )
  }

  renderDelivered() {
    return (
      <View>
        <View style={styles.cardContianer}>
          <TrackingCard
            status='Delivered'
            statusDate='Thursday, August 8th'
            image='https://shop.tesla.com/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1000433_0.png'
            delivered
            archived
            imageStyle={{width: 50, height: 50}}/>
        </View>

        <View style={styles.cardContianer}>
          <TrackingCard
            status='Delivered'
            statusDate='Thursday, August 8th'
            image='https://shop.tesla.com/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/100038401_0.jpg'
            delivered
            archived
            imageStyle={{width: 50, height: 50}}/>
        </View>

        <View style={styles.cardContianer}>
          <TrackingCard
            status='Delivered'
            statusDate='Thursday, August 8th'
            image='https://shop.tesla.com/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/WomensLeatherJkt-1_0.jpg'
            delivered
            archived
            imageStyle={{width: 50, height: 50}}/>
        </View>
      </View>
    );
  }

  render() {

    // set statusbar
    Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);

    return (
      <View style={styles.container}>
        <ContentCoverSlider
          ref='container'
          title='Tracking'>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={event => this.refs.container.onScroll(event)}
          contentContainerStyle={styles.scrollView}
          refreshControl={<RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}/>}>
            <View style={[
                styles.card, styles.header
              ]}>
              <Text style={[
                  Styles.Text, Styles.Emphasized, Styles.Title, Styles.Alternate
                ]}>
                你的訂單 Your Orders
              </Text>
            </View>
          {this.renderNonDelivered()}
          <HeaderText text='Archive' style={styles.text}/>
          {this.renderDelivered()}
        </ScrollView>
        </ContentCoverSlider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },

  cardContianer: {
    marginLeft: Sizes.InnerFrame,
    marginRight: Sizes.InnerFrame,
    paddingBottom: Sizes.InnerFrame
  },

  statusBarContent: {
    flexDirection: 'row',
    padding: Sizes.InnerFrame,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.MenuBackground,
    paddingTop: Sizes.InnerFrame * 2,
  },

  text: {
    color: Colors.SubduedText,
    paddingLeft: Sizes.InnerFrame,
    paddingBottom: Sizes.InnerFrame / 2
  },

  scrollView: {
    paddingTop: Sizes.InnerFrame
  },

  back: {
    position: 'absolute',
    top: Sizes.InnerFrame * 2,
    left: Sizes.InnerFrame,
    zIndex: 3
  },

  card: {
    margin: Sizes.InnerFrame,
    marginTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
  },

  header: {
    marginTop: 125
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
