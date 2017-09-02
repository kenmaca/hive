import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, Image
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

// components
import * as Animatable from 'react-native-animatable';
import UppercasedText from '../common/UppercasedText';
import Tag from '../common/Tag';

export default class ProductCard extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image
          source={{uri: 'https://dtpmhvbsmffsz.cloudfront.net/posts/2016/08/05/57a50f254e95a33a7d0085fe/m_57a50f84c2845687140082e4.jpg'}}
          style={styles.cover}>
          <LinearGradient
            colors={[Colors.DarkTransparent, Colors.MenuBackground]}
            style={styles.productCardHeader}>
            <Animatable.View
              animation='bounceIn'
              delay={700}>
              <Image
                source={{uri: 'https://image.freepik.com/free-vector/facebook-logo--vector--psd_286-2147488451.jpg'}}
                style={styles.logo} />
            </Animatable.View>
          </LinearGradient>
        </Image>
        <Animatable.View style={[Styles.Card, styles.infoContainer]}>
          <Text style={[
            Styles.Text, Styles.Emphasized, Styles.Alternate, styles.title]}>
            棉連帽衫 HOODIE x 模切貼紙 STICKERS
          </Text>
          <UppercasedText style={[
            Styles.Text, Styles.SmallText, Styles.Alternate]}>
            from Facebook, Inc.
          </UppercasedText>
          <View style={styles.tags}>
            <Tag outline color={Colors.AlternateText} label='889 可用' />
            <Tag outline label='罕見' />
            <Tag label='限量版' />
          </View>
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

  cover: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  productCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Sizes.OuterFrame
  },

  logo: {
    width: Sizes.InnerFrame * 3,
    height: Sizes.InnerFrame * 3
  },

  infoContainer: {
    backgroundColor: Colors.MenuBackground
  },

  title: {
    marginBottom: Sizes.InnerFrame / 2
  },

  tags: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: Sizes.InnerFrame
  },

  blur: {
    flex: 1
  }
});
