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
  Constants, Components, LinearGradient
} from 'expo';

export default class PackageCard extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={[Styles.EqualColumns]}>
          <Text style={[Styles.Text, Styles.Alternate, styles.textContainer]}>
            Redeem Card 兑换卡
          </Text>
        </View>
        <View style={styles.rect}>
          {/* <LinearGradient
            colors={['#B721FF', '#21D4FD']}
            start={{
              x: 1, y: 0}}
            end={{
              x: 0, y: 1}}
            style={styles.rectCover} /> */}
        </View>
        <View style={styles.tag}>
          {/* <LinearGradient
            colors={['#B721FF', '#21D4FD']}
            start={{
              x: 1, y: 0}}
            end={{
              x: 0, y: 1}}
            style={styles.tagCover} /> */}
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
    padding: Sizes.InnerFrame,
    paddingBottom: Sizes.InnerFrame / 2
  },

  description: {
    padding: Sizes.InnerFrame,
    paddingBottom: Sizes.OuterFrame,
    backgroundColor: Colors.Shadow
  },

  tag: {
    width: Sizes.Width / 6,
    height: Sizes.InnerFrame,
    borderRadius: 7,
    backgroundColor: Colors.Foreground,
    alignSelf: 'center',
    marginBottom: 5
  },

  rect: {
    width: Sizes.InnerFrame,
    height: Sizes.InnerFrame,
    borderTopLeftRadius: Sizes.InnerFrame / 2,
    borderTopRightRadius: Sizes.InnerFrame / 2,
    backgroundColor: Colors.Foreground,
    alignSelf: 'center'
  },

  tagCover: {
    width: Sizes.Width / 6,
    height: Sizes.InnerFrame,
    borderRadius: 7,
  },

  rectCover: {
    width: Sizes.InnerFrame,
    height: Sizes.InnerFrame,
    borderTopLeftRadius: Sizes.InnerFrame / 2
  }
});
