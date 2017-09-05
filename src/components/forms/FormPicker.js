import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, TouchableOpacity
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
import {
  Icon
} from 'react-native-elements';
import regionApi from './regionApi';

export default class FormPicker extends React.Component {

  componentDidMount() {
    regionApi
      .fetchRegionData()
      .then((data) => {
        //cache it.
        this._data = data;
      });
  }

  renderContent = () => {
    if (this.props.changed) {
      return this._data[this.props.selectedProvince][0] + ' ' + this._data[this.props.selectedCity][0] + ' ' + this._data[this.props.selectedArea][0]
    } else {
      return '省/城市/區 District, City and Province'
    }
  }
  render() {
    return (
      <View style={{paddingTop: 15}}>
        <View style={[styles.container, styles.border]}>
          <Text
            style={this.props.changed
              ?
              [Styles.Text, Styles.SmallText, styles.text]
              :
              [Styles.Text, Styles.SmallText, Styles.Alternate]
            }>
            省/城市/區 District, City and Province
          </Text>
          <View style={Styles.EqualColumns}>
            <Text
              style={this.props.changed
                ?
                [Styles.Text, styles.textInputContainer]
                :
                [Styles.Text, styles.textInputContainer, styles.text]}>
              {this.renderContent()}
            </Text>
            {
              this.props.iconRight &&
              <Icon
                name={this.props.iconRight}
                size={17}
                color={Colors.SubduedText}
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
