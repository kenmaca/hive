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
import SettingCard from '../components/setting/SettingCard';

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
          <SettingCard
            title='地址 Address'
            chevron
            description='更改你目前的默認地址 change your default address'
            onPress={Actions.addressForm}/>
          <SettingCard
            title='性別 Sex'
            sex
            description='更改你目前的性别 change your default sex'
            activeOpacity={1}/>
          <SettingCard/>
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
