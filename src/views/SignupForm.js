import React, {
  Component
} from 'react';
import {
  View, StyleSheet, ScrollView, Text, TextInput
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../Const';

//components
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import {
  Button
} from 'react-native-elements';
import FormInputField from '../components/forms/FormInputField';
import FormInputField2 from '../components/forms/FormInputField2';
import {
  Hoshi
} from 'react-native-textinput-effects';

export default class Form extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ContentCoverSlider
          ref='container'
          title='Profile'
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
                Sign-in to your Hive account
              </Text>
            </View>
            <View style={[Styles.Card, styles.card]}>
              <FormInputField2
                placeholder='Name'/>
                <FormInputField2
                  placeholder='Email'
                  iconRight='email'/>
                  <FormInputField2
                    placeholder='Password'
                    iconRight='lock'/>
              {/* <FormInputField placeholder='First Name'/>
              <FormInputField placeholder='Last Name'/>
              <FormInputField placeholder='Email'
                keyboardType='email-address'/>
              <FormInputField placeholder='Password'
                secureTextEntry={true}/> */}
            </View>
            <Text style={[Styles.Text, styles.terms, styles.error]}>
              Please fill out all fields with valid information
            </Text>
            <Button
              title='SIGN UP'
              textStyle={[Styles.Text, Styles.Emphasized, Styles.Title, Styles.Alternate]}
              backgroundColor={Colors.PositiveButton}
              iconRight
              icon={{
                name: 'arrow-forward'
              }}/>
            <Text style={[Styles.Text, styles.terms]}>
              By clicking "Sign Up", you agree to Hivemade's Terms and Conditions and Privacy Policy
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
    marginTop: Sizes.OuterFrame
  },

  terms: {
    margin: Sizes.InnerFrame,
    color: Colors.SubduedText
  }
});
