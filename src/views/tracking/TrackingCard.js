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
import UppercasedText from '../../components/common/UppercasedText';

export default class TrackingCard extends React.Component {
  render() {
    return (
      <View style={[Styles.Card, Styles.EqualColumns]}>
        <Image
          source={{uri: 'https://shop.tesla.com/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/100044201_0.jpg'}}
          resizeMode='contain'
          style={styles.image}>
        </Image>
        <View style={styles.textContainer}>
          <UppercasedText style={[Styles.Text, Styles.Emphasized, Styles.Title]}>
            In Transit
          </UppercasedText>
          <View style={styles.row}>
            <Text style={[Styles.Text]}>
              {'Expected '}
            </Text>
            <Text style={[Styles.Text]}>
              Monday, August 28th
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  textContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },

  expected: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end'
  },

  status: {
    flex: 1,
    alignItems: 'flex-end'
  },

  row: {
    flexDirection: 'row'
  },

  image: {
    width: Sizes.Width / 4,
    height: Sizes.Width / 4
  }
});
