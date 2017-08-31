import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, ScrollView, TouchableOpacity
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

import {
  Icon
} from 'react-native-elements';

export default class SettingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marsColor: Colors.SubduedText,
      venusColor: Colors.SubduedText
    }
  }

  render() {
    return (
      <View style={styles.cardContianer}>
        <TouchableOpacity
          {...this.props}>

        <View style={[Styles.Card, Styles.EqualColumns, styles.centerRow]}>
          <Text style={[Styles.Text, Styles.Emphasized]}>
            {this.props.title || ''}
          </Text>
          {
            this.props.chevron &&
            <Icon
              name='chevron-right'
              type='entypo'
              size={17}
              color={Colors.SubduedText}/>
          }
          { this.props.sex &&
            <View style={styles.row}>
              <Icon
                name='mars'
                size={17}
                color={this.state.marsColor}
                containerStyle={styles.mars}
                onPress={() => this.setState({
                  marsColor: Colors.PositiveButton,
                  venusColor: Colors.SubduedText
                })}
                type='font-awesome'/>
              <Icon
                name='venus'
                size={17}
                color={this.state.venusColor}
                containerStyle={styles.venus}
                onPress={() => this.setState({
                  marsColor: Colors.SubduedText,
                  venusColor: 'pink'
                })}
                type='font-awesome'/>
            </View>
          }
        </View>
        </TouchableOpacity>
        <Text style={[Styles.Text, styles.textGrey]}>
          {this.props.description || ''}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerRow: {
    alignItems: 'center',
    padding: Sizes.InnerFrame
  },

  textGrey: {
    padding: Sizes.InnerFrame,
    color: Colors.SubduedText
  },

  cardContianer: {
    marginTop: Sizes.InnerFrame
  },

  row: {
    flexDirection: 'row'
  },

  mars: {
    paddingRight: Sizes.OuterFrame,
    paddingLeft: Sizes.InnerFrame/3
  },

  venus: {
    paddingLeft: Sizes.OuterFrame,
    paddingRight: Sizes.InnerFrame/3
  }
});
