import React from 'react';
import {
  StyleSheet, View, Text, Image, ScrollView
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';

// components
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import UppercasedText from '../components/common/UppercasedText';
import {
  Button
} from 'react-native-elements';

export default class Product extends React.Component {
  render() {
    return (
      <ContentCoverSlider
        ref='container'
        title='Cotton Hoodie'
        backgroundColor={Colors.Facebook}
        backAction={false}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={event => this.refs.container.onScroll(event)}>
          <View style={[
            styles.card, styles.header]}>
            <Text style={[
              Styles.Text, Styles.Emphasized, Styles.Title, Styles.Alternate]}>
              Redeeming (1)
            </Text>
          </View>
          <View style={[
            Styles.Card, styles.card]}>
            <UppercasedText style={[
              Styles.Text, Styles.Emphasized, Styles.Title]}>
              Cotton Hoodie
            </UppercasedText>
            <UppercasedText style={[Styles.Text, Styles.SmallText, Styles.BottomSpacing]}>
              from Facebook, Inc.
            </UppercasedText>
            <Text style={Styles.Text}>
              Made with premium hand-woven Supima cotton, this hoodie features Facebook's stylized "f" as an embroidered logo on the right chest in their signature blue color.
            </Text>
          </View>
          <Image
            style={[
              Styles.Card, styles.card, styles.photo]}
            source={{
              uri: 'https://ae01.alicdn.com/kf/HTB1vteeSFXXXXaBXpXXq6xXFXXXm/New-Women-Sweatshirt-2017-Autumn-Embroidery-Facebook-Long-Sleeve-Loose-Pullovers-White-Blue-Blac-Hoodie-Sweatshirt.jpg'}} />
          <Image
            style={[
              Styles.Card, styles.card, styles.photo]}
            source={{
              uri: 'https://ae01.alicdn.com/kf/HTB1e0NZSFXXXXXUXVXXq6xXFXXX8/New-Women-Sweatshirt-2017-Autumn-Embroidery-Facebook-Long-Sleeve-Loose-Pullovers-White-Blue-Blac-Hoodie-Sweatshirt.jpg'}} />
        </ScrollView>
      </ContentCoverSlider>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: Sizes.InnerFrame,
    marginTop: 0
  },

  header: {
    marginTop: 125
  },

  photo: {
    height: Sizes.Height / 2
  }
});
