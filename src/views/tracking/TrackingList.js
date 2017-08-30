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
      isRefreshing: false,
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
          <View style={styles.cardContianer}>
            {/* <HeaderText text='Ordered' style={styles.text}/> */}
            <TrackingCard
              status='Ordered'/>
            <TrackingIndicator />
          </View>
          <View style={styles.cardContianer}>
            {/* <HeaderText text='Shipped' style={styles.text}/> */}
            <TrackingCard
              status='Shipped'/>
          <TrackingIndicator shipped={true}/>
          </View>
          <HeaderText text='Archive' style={styles.text}/>
          <View style={styles.cardContianer}>
            <TrackingCard
              status='Delivered'
              expected={false}
              imageStyle={{width: 50, height: 50}}/>
          </View>
          <View style={styles.cardContianer}>
            {/* <HeaderText text='Delivered' style={styles.text}/> */}
            <TrackingCard
              status='Delivered'
              expected={false}
              imageStyle={{width: 50, height: 50}}/>
          </View>
          <View style={styles.cardContianer}>
            {/* <HeaderText text='Delivered' style={styles.text}/> */}
            <TrackingCard
              status='Delivered'
              expected={false}
              imageStyle={{width: 50, height: 50}}/>
          </View>
          <View style={styles.cardContianer}>
            {/* <HeaderText text='Delivered' style={styles.text}/> */}
            <TrackingCard
              status='Delivered'
              expected={false}
              imageStyle={{width: 50, height: 50}}/>
          </View>
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
