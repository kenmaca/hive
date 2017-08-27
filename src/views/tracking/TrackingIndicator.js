import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, ScrollView, TouchableOpacity, Image
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

const shippedSlideInLeft = {
  from: {
    width: 0
  },

  to: {
    width: Sizes.Width* 3 / 10
  }
}

const deliveredSlideInLeft = {
  from: {
    width: 0
  },

  to: {
    width: Sizes.Width - Sizes.OuterFrame * 2 - Sizes.Width* 3 / 10
  }
}

Animatable.initializeRegistryWithDefinitions({
  shippedSlideInLeft: shippedSlideInLeft,
  deliveredSlideInLeft: deliveredSlideInLeft
});

export default class TrackingIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 3
    }
  }

  render() {
    return (
      <View style={[Styles.Card, styles.indicatorContainer]}>
        <View style={styles.indicator}>
          <View style={styles.dot}>
          </View>
          {(this.props.shipped || this.props.delivered) &&
            <Animatable.View
              style={[styles.fill]}
              animation='shippedSlideInLeft'
              duration={1000}>
              <View style={styles.dot}>
              </View>
            </Animatable.View>
          }
          {this.props.delivered &&
          <Animatable.View
            style={[styles.fill]}
            animation='deliveredSlideInLeft'
            duration={2000}
            delay={500}>
            <View style={styles.dot}>
            </View>
          </Animatable.View>
          }
        </View>
        <View style={[Styles.EqualColumns, styles.stretch]}>
          <View>
            <Text style={[Styles.Text,Styles.Emphasized]}>
              ordered
            </Text>
            <Text style={[Styles.Text]}>
              17 Aug
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: Sizes.Width*(this.state.length - 2)/10}}>
            <Text style={[Styles.Text, Styles.Emphasized]}>
              shipped
            </Text>
            <Text style={[Styles.Text]}>
              18 Aug
            </Text>
          </View>
          <View>
            <Text style={[Styles.Text, Styles.Emphasized]}>
              delivered
            </Text>
            <Text style={[Styles.Text, {alignSelf: 'flex-end'}]}>
              19 Aug
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    height: 5,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: Colors.SubduedForeground
  },

  indicatorContainer: {
    paddingTop: 0
  },

  fill: {
    backgroundColor: Colors.Accent,
    height: 5
  },

  stretch: {
    alignSelf: 'stretch',
    flexDirection: 'row'
  },

  dot: {
    height: 5,
    width: 5,
    backgroundColor: Colors.DarkGold,
    alignSelf: 'flex-end'
  },

  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  searchBar: {
    height: Sizes.OuterFrame * 1.5,
    width: 0,
    backgroundColor: Colors.Foreground
  }
});
