import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Image, Text
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

export default class PackageCard extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={[Styles.EqualColumns]}>
          <Text style={[Styles.Text, Styles.Title, Styles.Alternate, styles.textContainer]}>
            Redeem Card 兑换卡
          </Text>
        </View>
        <Image
          source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504924014&di=e9c554d8e1f6e91a8bce8bf0d4cac20c&imgtype=jpg&er=1&src=http%3A%2F%2Fmillionmilesecrets.com%2Fwp-content%2Fuploads%2F2015%2F05%2FBlog_Giveaway_200_In_Amazon_Gift_Cards_01.jpg'}}
          resizeMode='contain'
          style={styles.image}>
          <View style={styles.description}>
            <Text style={[Styles.Text, Styles.Emphasized, Styles.Alternate]}>
              What's in it?
            </Text>
            <Text style={[Styles.Text, Styles.Alternate]}>
              Tap to figure it out!
            </Text>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MenuBackground
  },

  image: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  textContainer: {
    padding: Sizes.InnerFrame
  },

  description: {
    padding: Sizes.InnerFrame,
    paddingBottom: Sizes.OuterFrame,
    backgroundColor: Colors.Shadow

  }
});
