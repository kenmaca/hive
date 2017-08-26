import React, {
  Component
} from 'react';
import {
  View, StyleSheet, TextInput, Text
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';

//components
import {
  FormInput, FormValidationMessage, Icon
} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default class FormInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isFocused: false,
      placeholder: this.props.placeholder,
      animate: true
    }
  }

  returnInput = () => {
    return this.state.input
  }

  animateTextInputTitle = () => {
    if (this.state.input.length === 1 && this.state.animate) {
      this.refs.textInputTitle.transition({'translateY': 20}, {'translateY': 0})
    } else if (this.state.input.length > 1) {
      this.setState({
        animate: false
      })
    }
  }

  render() {
    return (
      <View style={{paddingTop: Sizes.InnerFrame}}>
        <View style={
            this.state.isFocused
            ?
            [styles.container, styles.borderSelected]
            :
            [styles.container, styles.border]}>
          <Animatable.Text
            ref='textInputTitle'
            style={this.state.input.length > 0
              ?
              this.state.isFocused
              ?
              [Styles.Text, Styles.SmallText]
              :
              [Styles.Text, Styles.SmallText, styles.text]
              :
              [Styles.Text, Styles.SmallText, styles.unSelected]}>
            {this.props.placeholder}
          </Animatable.Text>
          <View style={Styles.EqualColumns}>
            <TextInput
              ref='textInput'
              style={[Styles.Text, styles.textInputContainer]}
              placeholder={this.state.placeholder}
              secureTextEntry={this.props.secureTextEntry && true}
              placeholderTextColor={Colors.SubduedText}
              onFocus={() => this.setState({
                isFocused: true
              })}
              onEndEditing={() => this.setState({
                isFocused: false
              })}
              onChangeText={(text) => this.setState({
                input: text
              }, () => this.animateTextInputTitle())}
              {...this.props} />
            {
              this.props.iconRight &&
              <Icon
                name={this.props.iconRight}
                size={13}
                color={this.state.isFocused ? Colors.MenuBackground : Colors.SubduedText}
                style={[styles.icon]}/>
            }
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: Sizes.InnerFrame,
    marginRight: Sizes.InnerFrame
  },

  textInputContainer: {
    flex: 1,
    paddingTop: Sizes.InnerFrame/5,
    paddingBottom: Sizes.InnerFrame/3
  },

  border: {
    borderBottomWidth: 0.5,
    borderColor: Colors.SubduedText
  },

  borderSelected: {
    borderBottomWidth: 0.5,
    borderColor: Colors.MenuBackground
  },

  icon: {
    justifyContent: 'center'
  },

  spacing: {
    marginTop: 0
  },

  field: {
    margin: 0,
    padding: 0
  },

  text: {
    color: Colors.SubduedText
  },

  selected: {
    color: Colors.MenuBackground
  },

  unSelected: {
    color: Colors.Foreground
  }
});
