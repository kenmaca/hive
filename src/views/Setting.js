import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, ScrollView
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components
} from 'expo';

//components
import * as Animatable from 'react-native-animatable';
import UppercasedText from '../components/common/UppercasedText';
import {
  Icon
} from 'react-native-elements';

export default class Setting extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBarContent}>
          <UppercasedText style={[Styles.Text, Styles.Title, Styles.Alternate]}>
            Setting
          </UppercasedText>
        </View>
        <ScrollView>
          <View style={[Styles.Card, Styles.EqualColumns, styles.centerRow]}>
            <Text style={[Styles.Text, Styles.Emphasized]}>
              地址 Address
            </Text>
            <Icon
              name='arrow-forward'
              size={17}
              color={Colors.SubduedText}/>
          </View>
          <Text style={[Styles.Text, styles.textGrey]}>
            更改你目前的默認地址 change your default address
          </Text>
        </ScrollView>
        <Animatable.View
          animation='bounceIn'
          style={styles.back}>
          <Icon
            name='arrow-back'
            color={Colors.AlternateText}
            onPress={Actions.pop}
            underlayColor={Colors.Transparent} />
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

  statusBarContent: {
    flexDirection: 'row',
    padding: Sizes.InnerFrame,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.MenuBackground,
    paddingTop: Sizes.InnerFrame * 2,
  },

  back: {
    position: 'absolute',
    top: Sizes.InnerFrame * 2,
    left: Sizes.InnerFrame,
    zIndex: 3
  },

  centerRow: {
    alignItems: 'center',
    padding: Sizes.InnerFrame
  },

  textGrey: {
    padding: Sizes.InnerFrame,
    color: Colors.SubduedText
  }
});
