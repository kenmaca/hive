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

export default class TrackingIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inTransit: this.props.inTransit
    }
  }

  render() {
    return (
      <View style={[Styles.Card, styles.indicatorContainer]}>
        <View style={styles.indicator}>
          <View style={styles.dot}>
          </View>
          {(this.props.inTransit || this.props.shipped) &&
            <Animatable.View
              style={[styles.fill]}
              animation='shippedSlideInLeft'
              duration={1000}>
              <View style={styles.dot}>
              </View>
            </Animatable.View>
          }
          {this.props.inTransit &&
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
              Ordered
            </Text>
            <Text style={[Styles.Text]}>
              {this.props.orderDate || 'orderDate'}
            </Text>
          </View>
          {(this.props.shipped || this.props.inTransit) &&
            <View style={styles.shipped}>
              <Text style={[Styles.Text, Styles.Emphasized]}>
                Shipped
              </Text>
              <Text style={[Styles.Text]}>
                {this.props.shipDate || 'shipDate'}
              </Text>
            </View>
        }
          {this.props.inTransit &&
            <View>
              <Text style={[Styles.Text, Styles.Emphasized]}>
                Arriving at
              </Text>
              <Text style={[Styles.Text, {alignSelf: 'flex-end'}]}>
                {this.props.deliverDate || 'deliverDate'}
              </Text>
            </View>
        }
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
    backgroundColor: '#C5B358',
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

  shipped: {
    flex: 1,
    paddingLeft: Sizes.Width*(3 - 1.8) / 10
  }
});


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
    width: Sizes.Width - Sizes.OuterFrame * 2 - Sizes.InnerFrame*2 - Sizes.Width* 3 / 10 - 20
  }
}

Animatable.initializeRegistryWithDefinitions({
  shippedSlideInLeft: shippedSlideInLeft,
  deliveredSlideInLeft: deliveredSlideInLeft
});
