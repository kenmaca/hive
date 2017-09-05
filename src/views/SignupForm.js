import React, {
  Component
} from 'react';
import {
  View, StyleSheet, ScrollView, Text, TextInput
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../Const';
import {
  Constants, Video, LinearGradient
} from 'expo';

//components
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import {
  Button
} from 'react-native-elements';
import FormInputField from '../components/forms/FormInputField';
import {
  Actions
} from 'react-native-router-flux';

export default class SignupForm extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ContentCoverSlider
          ref='container'
          title='Profile'
          background={(
            <View style={styles.cover}>
              <Video
                isMuted
                isLooping
                shouldPlay
                ref='video'
                source={require('../../res/vid/fb.mp4')}
                rate={1.0}
                resizeMode={Video.RESIZE_MODE_COVER}
                style={styles.cover} />
              <LinearGradient
                colors={[Colors.DarkTransparent, Colors.MenuBackground]}
                style={StyleSheet.absoluteFill} />
            </View>
          )}
          backAction={false}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={event => this.refs.container.onScroll(event)}>
            <View style={[
                styles.card, styles.header
              ]}>
              <Text style={[
                  Styles.Text, Styles.Emphasized, Styles.Title, Styles.Alternate
                ]}>
                註冊 Create a new Hivemade Account
              </Text>
            </View>
            <View style={[Styles.Card, styles.card]}>
              <FormInputField
                placeholder='名稱 Name'/>
              <FormInputField
                placeholder='電子郵件地址 Email'
                iconRight='email'/>
            </View>
            <View style={[Styles.Card, styles.card]}>
              <FormInputField
                placeholder='密碼 Password'
                secureTextEntry
                iconRight='lock'/>
              <FormInputField
                placeholder='確認 Confirm Password'
                secureTextEntry
                iconRight='lock'/>
            </View>
            <Button
              icon={{
                name: 'arrow-forward',
                size: Sizes.Text
              }}
              iconRight
              title='註冊 Sign Up'
              onPress={Actions.main}
              backgroundColor={Colors.PositiveButton}
              textStyle={[Styles.Text, Styles.Emphasized, Styles.Alternate]}
              buttonStyle={[styles.field, styles.fieldSpacing]} />
            <Text style={[Styles.Text, Styles.Center, styles.terms]}>
              點擊“註冊”即表示您同意 Hivemade 的條款和隱私政策
            </Text>
          </ScrollView>
        </ContentCoverSlider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
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

  error: {
    marginTop: Sizes.InnerFrame,
    marginBottom: 5,
    color: Colors.NegativeButton
  },

  field: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0
  },

  fieldSpacing: {
    marginTop: 0
  },

  terms: {
    margin: Sizes.InnerFrame,
    marginTop: Sizes.InnerFrame / 2,
    color: Colors.SubduedText
  },

  cover: {
    backgroundColor: Colors.MenuBackground,
    height: Sizes.Height / 3.5
  },
});
