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
        <View style={styles.statusBarContent}>
          <UppercasedText style={[Styles.Text, Styles.Title, Styles.Alternate]}>
            TRACKING
          </UppercasedText>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={<RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}/>}>
          {/* <View style={styles.cardContianer}>
            <HeaderText text='Ordered' style={styles.text}/>
            <TrackingCard/>
            <TrackingIndicator />
          </View> */}
          <View style={styles.cardContianer}>
            <HeaderText text='Shipped' style={styles.text}/>
            <TrackingCard/>
          <TrackingIndicator shipped={true}/>
          </View>
          <View style={styles.cardContianer}>
            <HeaderText text='Delivered' style={styles.text}/>
            <TrackingCard/>
          <TrackingIndicator delivered={true}/>
          </View>
        </ScrollView>
        <Animatable.View
          animation='bounceIn'
          style={styles.back}>
          <Icon
            name='arrow-back'
            color={Colors.AlternateText}
            onPress={Actions.pop}
            underlayColor={Colors.Transparent} />
        </Animatable.View>
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
    paddingTop: Sizes.InnerFrame / 2,
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
    alignSelf: 'flex-end',
    paddingRight: Sizes.OuterFrame,
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
  }
});
