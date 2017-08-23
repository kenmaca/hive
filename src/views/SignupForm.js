import React, {
  Component
} from 'react';
import {
  View, StyleSheet, ScrollView, Text
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../Const';

//components
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import {
  GiftedForm, GiftedFormManager
} from 'react-native-gifted-form';
import {
  Button
} from 'react-native-elements';

export default class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        tos: false,
      }
    }
  }

  handleValueChange(values) {
    console.log('handleValueChange', values)
    this.setState({ form: values })
  }

  render() {
    const { firstName, lastName, email, password, gender } = this.state.form;
    return (
      <View style={styles.container}>
        <ContentCoverSlider
          ref='container'
          title='Profile'
          backAction={false}>
          <View style={[
              styles.card, styles.header
            ]}>
            <Text style={[
                Styles.Text, Styles.Emphasized, Styles.Title, Styles.Alternate
              ]}>
              Sign-in to your Hive account
            </Text>
          </View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={event => this.refs.container.onScroll(event)}>
            <View style={[Styles.Card, styles.card]}>
              <GiftedForm
                formName='signupForm'
                scrollEnabled={false}
                onValueChange={this.handleValueChange.bind(this)}
                validators={{

                }}
              >
                <GiftedForm.TextInputWidget
                  name='firstName'
                  title='First name'
                  placeholder='Roy'
                  clearButtonMode='while-editing'
                  value={firstName}
                />
                <GiftedForm.TextInputWidget
                  name='lastName'
                  title='Last name'
                  placeholder='Law'
                  clearButtonMode='while-editing'
                  value={lastName}
                  widgetStyles={
                    {
                      textInputTitleInline: {

                      },
                      textInputInline: {

                      },
                      rowContainer: {
                        paddingTop: 10
                      }
                    }
                  }
                />
                <GiftedForm.TextInputWidget
                  name='email'
                  title='Email'
                  placeholder='123roy_law@gmail.com'
                  clearButtonMode='while-editing'
                  value={email}
                  widgetStyles={
                    {
                      textInputTitleInline: {

                      },
                      textInputInline: {

                      },
                      rowContainer: {
                        paddingTop: 10
                      }
                    }
                  }
                />
                <GiftedForm.TextInputWidget
                  name='password'
                  title='Password'
                  secureEntry={true}
                  placeholder='********'
                  clearButtonMode='while-editing'
                  value={password}
                  widgetStyles={
                    {
                      textInputTitleInline: {

                      },
                      textInputInline: {

                      },
                      rowContainer: {
                        paddingTop: 10
                      }
                    }
                  }
                />
              </GiftedForm>
            </View>
          </ScrollView>
          <Button
            icon={{
              name: 'login',
              type: 'entypo',
              size: Sizes.Text
            }}
            title='Sign in with Email'
            backgroundColor={Colors.PositiveButton}
            textStyle={[Styles.Text, Styles.Emphasized, Styles.Alternate]}
            buttonStyle={[styles.field, styles.fieldSpacing]} />
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

  avatar: {
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 60
  },

  card: {
    margin: Sizes.InnerFrame,
    marginTop: 0
  },

  header: {
    marginTop: 125
  },

  field: {
    position: 'absolute',
    bottom: 70,
    left: Sizes.InnerFrame,
    right: Sizes.InnerFrame
  },

  error: {
    marginTop: Sizes.InnerFrame / 2,
    color: Colors.NegativeButton
  },

  fieldSpacing: {
    marginTop: Sizes.OuterFrame
  },
});
